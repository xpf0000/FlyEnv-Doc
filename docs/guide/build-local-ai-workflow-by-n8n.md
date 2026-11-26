---
title: 'Self-Hosted AI Workflows with n8n and Ollama'
head:
  - - meta
    - name: description
      content: 'Build private local AI automation with n8n and Ollama in FlyEnv, including native services, HTTPS, and controlled remote access.'
---

# Build Self-Hosted AI Workflows with n8n & Ollama (No Docker Required)

Run n8n and Ollama in FlyEnv, then make a local POST request that sends a prompt to a downloaded model and returns its response. You need internet access to install n8n and Ollama and download the model. The loopback webhook and inference can run offline after setup.

---

## Why Self-Hosted AI Workflows Matter

FlyEnv manages the two service processes. You build the workflow in n8n and choose the model in its Ollama node. The example uses n8n’s default SQLite storage and the local Ollama API. Nodes that call third-party APIs still need internet access.

---

## Prerequisites

Before starting, ensure you have:

1. **FlyEnv installed** on macOS, Windows, or Linux ([Download here](/download))
2. Basic familiarity with workflow automation concepts
3. At least 8GB RAM (16GB recommended for larger AI models)

---

## Step 1: Install and Start n8n

Install a [Node.js](/features/nodejs) version supported by your n8n release and make sure `node` and `npm` work in the terminal.

1. Open the [n8n module](/features/n8n) in FlyEnv and select **Version Manager**.
2. Install a version. FlyEnv runs npm in its terminal, where you can check the output.
3. Start the installed version from the module.

![n8n module in FlyEnv](https://oss.macphpstudy.com/image/n8n-1.webp)

![n8n module in FlyEnv](https://oss.macphpstudy.com/image/n8n-2.webp)

4. Access the n8n web interface at `http://localhost:5678`

![n8n dashboard](https://oss.macphpstudy.com/image/n8n-3.webp)

---

## Step 2: Install Ollama and Download AI Models

Now let's set up the AI brain of your workflow using Ollama.

1. In FlyEnv, go to the **AI Tools** section
2. Select **Ollama** and click **Install**
3. Start the Ollama service

![Ollama module in FlyEnv](https://oss.macphpstudy.com/image/n8n-4.webp)

![Available models in Ollama](https://oss.macphpstudy.com/image/n8n-5.webp)

Download a model that fits your machine and confirm its tag appears at `http://127.0.0.1:11434/api/tags`. Use that exact local model in the workflow. [Ollama model setup](/guide/build-local-offline-ai-agent)

---

## Step 3: Configure Your First AI Workflow

Now let's build a workflow that receives HTTP requests, processes them through your local AI, and returns intelligent responses.

### 3.1 Create a Webhook Trigger

1. In n8n, click **"Add Workflow"**
2. Search for **"Webhook"** and add it as the trigger node
3. Configure the webhook:
   - **Method:** POST
   - **Path:** `ai-assistant`
   - **Response:** Select `When Last Node Finishes` (this returns the AI model's output)

![Webhook configuration](https://oss.macphpstudy.com/image/n8n-6.webp)

![Webhook configuration](https://oss.macphpstudy.com/image/n8n-7.webp)

> **Important:** Choosing "When Last Node Finishes" ensures the webhook returns the AI-generated response rather than an immediate acknowledgment.

### 3.2 Add the Ollama AI Node

1. Add an **Ollama** node after the webhook
2. Configure the connection:
   - **Base URL:** `http://127.0.0.1:11434` (Ollama's default)
   - **Model:** Select the model you downloaded (e.g., `qwen3.5`)
   
3. Set up the message template:
   - In the **Messages** field, add a user message
   - For the **Content**, use an expression to capture the webhook input: `\{\{ $json.query?.q ?? $json.body?.q ?? 'Hello' \}\}`

![Ollama node setup](https://oss.macphpstudy.com/image/n8n-8.webp)

![Ollama node setup](https://oss.macphpstudy.com/image/n8n-9.webp)

### 3.3 Test Your Workflow

For an editor test, select **Listen for Test Event** and copy the **Test URL**. For the persistent endpoint in the example below, publish the workflow or switch it to **Active** on older versions. Copy its **Production URL**. In the example with default ports and path, this is `http://127.0.0.1:5678/webhook/ai-assistant`.

```bash
curl -X POST "http://127.0.0.1:5678/webhook/ai-assistant" \
  -H "Content-Type: application/json" \
  -d '{"q": "Explain the benefits of local AI workflows"}'
```

Check the HTTP response for the model output and open **Executions** in n8n to inspect the run. A `404` usually calls for checking which URL you copied and whether the workflow is published or the test listener is running. If the Ollama node fails, check that `/api/tags` lists the chosen model. [n8n Webhook URLs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/#webhook-urls)

---

## Step 4: Enable HTTPS with Reverse Proxy

The example already works on loopback. Use this optional proxy step if you want a local HTTPS address. If n8n advertises an internal URL from behind the proxy, configure its external webhook address in the n8n environment editor and restart the service. [n8n reverse-proxy settings](https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/)

### 4.1 Add a Local Domain

1. Open FlyEnv's **Site** section
2. Click **"Add Site"**
3. Configure:
   - **Domain:** `n8n.test` (or any `.test` domain)
   - **Type:** Reverse Proxy
   - **Target:** `http://127.0.0.1:5678`

![Site configuration in FlyEnv](https://oss.macphpstudy.com/image/n8n-10.webp)

### 4.2 Enable Automatic SSL

FlyEnv automatically generates and manages local SSL certificates:

1. In the site settings, enable **"Auto SSL"**
2. FlyEnv configures Nginx/Caddy/Apache with the certificate
3. Access your n8n instance at `https://n8n.test`

![Site configuration in FlyEnv](https://oss.macphpstudy.com/image/n8n-11.webp)

> **No manual certificate management needed!** FlyEnv handles mkcert integration automatically.

---

## Step 5: Expose to Internet with Cloudflare Tunnel

Skip this step for offline use. A Cloudflare tunnel needs internet access. Configure authentication on the Webhook node before sharing the endpoint. Keep the n8n editor behind access controls, and leave the Ollama API on loopback.

### 5.1 Get Your Cloudflare API Token

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **My Profile** (top right) → **API Tokens**
3. Click **Create Token**
4. Use the **"Cloudflare Tunnel"** template, or create custom with these permissions:
   - **Account:Cloudflare Tunnel:Edit** — For managing tunnels
   - **Zone:Zone:Read** — For listing your domains
   - **Zone:DNS:Edit** — For creating DNS records
5. Select the **Zone Resources** (domains) you want to use
6. Copy the generated token

> **Tip:** If you don't have a domain, you can register a cheap one or use Cloudflare's free subdomains on some plans.

### 5.2 Configure in FlyEnv

1. Open FlyEnv → **Cloudflare Tunnel** module, click the **Plus Icon Button**
2. Paste your **API Token**
3. FlyEnv automatically fetches your available domains

![FlyEnv Cloudflare Tunnel Module](https://oss.macphpstudy.com/image/cloud-tunnel-1.webp)

### 5.3 Create Your Tunnel for n8n

After zones are loaded:

1. **Select Zone**: Choose the domain you want to use (e.g., `yourdomain.com`)
2. **Set Subdomain**: Enter your desired subdomain (e.g., `ai` → creates `ai.yourdomain.com`)
3. **Set Local URL**: Enter `http://localhost:5678` (n8n's default port)
4. Click **"Ok"**

![FlyEnv Cloudflare Tunnel Module](https://oss.macphpstudy.com/image/cloud-tunnel-2.webp)

That's it! FlyEnv handles everything internally:
- ✅ Creates the Cloudflare Tunnel
- ✅ Configures DNS records
- ✅ Sets up routing rules
- ✅ Generates SSL certificates

### 5.4 Start the Tunnel

Click the **"Start"** button in the Cloudflare Tunnel module.

Your n8n workflow is now accessible at `https://ai.yourdomain.com` from anywhere in the world via HTTPS—no server deployment, no port forwarding, no complex network configuration.

![FlyEnv Cloudflare Tunnel Module](https://oss.macphpstudy.com/image/cloud-tunnel-3.webp)

### Managing Multiple Tunnels

Create additional tunnels for different workflows or team members:

| Subdomain | Local URL | Purpose |
|-----------|-----------|---------|
| `ai` | `http://localhost:5678` | Main n8n AI workflow |
| `ai-test` | `http://localhost:5678` | Testing environment |
| `webhook` | `http://localhost:5678/webhook` | Public webhook endpoint |

All managed from one interface—start, stop, or delete tunnels with one click.

---

## Advanced Workflow Ideas

Once you have the basic setup working, explore these powerful automation patterns:

### Customer Support Analyzer
Connect your CRM or chat platform to n8n, pass conversation history to your local AI, and receive sentiment analysis plus suggested responses—all without sending customer data to external APIs.

### Code Review Bot
Trigger workflows from Git webhooks, use DeepSeek Coder to analyze pull requests, and post automated comments with improvement suggestions.

### Document Processing Pipeline
Receive documents via email or upload, extract text with local OCR, process through Ollama for summarization or classification, and store results in your database.

### Smart Home Integration
Combine with Home Assistant webhooks to create AI-powered automation rules using natural language commands processed entirely locally.

---

## Video Walkthrough

Watch the [n8n and Ollama workflow demo](/demos?video=n8n-ollama-workflow).

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/YnA1B3qmDJU?si=8trvnWn7JUxDQeLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Frequently Asked Questions (FAQ)

### Does this setup use less RAM than Docker?
**Often, but it depends on the workload.** FlyEnv runs n8n and Ollama directly on your system and avoids a container VM. Model size, active workflows, databases, and the Docker configuration determine the actual difference.

### Can I use this completely offline?
The local webhook and downloaded Ollama model can run offline after installation. Cloudflare Tunnel and any nodes that call remote services require an internet connection.

### Can I connect multiple AI models in one workflow?
Yes! n8n supports branching and conditional logic. You could route requests to different Ollama models based on task type—use CodeLlama for programming questions, Qwen for general knowledge, etc.

---

## Next Steps

Your self-hosted AI automation platform is now ready! Here are recommended next steps:

- [Set up an offline coding assistant with Ollama](/guide/build-local-offline-ai-agent)
2. **Secure your setup** — Read the [Cloudflare Tunnel guide](/guide/cloudflare-tunnel-local-development) for production deployment tips
3. **Download FlyEnv** — If you haven't already, [get the latest version](/download) for your operating system

Have questions or want to share your workflow creations? Join our [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions) community!
