# Custom Modules Guide

## Introduction

FlyEnv currently includes numerous built-in modules, but there are still many functional modules commonly used in development that aren't yet integrated. If you need a specific module in FlyEnv, we recommend first submitting your request via [Discussions](https://github.com/xpf0000/FlyEnv/discussions) or [Issues](https://github.com/xpf0000/FlyEnv/issues).

To address this need, FlyEnv now introduces Custom Modules - allowing users to add their own modules while maintaining the same seamless experience as built-in system modules.

This guide demonstrates the process using [etcd](https://github.com/etcd-io/etcd) as an example. As of this writing, FlyEnv doesn't include a native etcd module, though there's already an open request (#307). We appreciate all user feedback - every suggestion helps improve FlyEnv for everyone.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/ViKMVkh3TL8?si=whaQ5nXE1fhiT5gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Adding a Custom Module

### Step 1: Prepare the Binary
Download the etcd binary package and extract the files.

![custom-module-screen1](https://oss.macphpstudy.com/image/custom-module-screen1.png)

### Step 2: Create Configuration
Create an `etcd.yaml` configuration file:

```yaml
name: "etcd-flyenv-test"
listen-client-urls: "http://0.0.0.0:2379"
listen-peer-urls: "http://0.0.0.0:2380"
advertise-client-urls: "http://127.0.0.1:2379"
initial-advertise-peer-urls: "http://127.0.0.1:2380"
log-level: "info"
log-outputs: ["stdout"]
```

### Step 3: Create Module Category
1. Navigate to Settings → Modules
2. Click the icon next to "Site" to create a new module category

![custom-module-screen2](https://oss.macphpstudy.com/image/custom-module-screen2.png)

### Step 4: Add New Module
Within your new category, click "Add" to create a module.

Configuration options:
- **Is Module a Service?**: Enables FlyEnv to manage startup/shutdown and adds toggle controls
- **Only one service can run at a time**: For services that shouldn't run multiple versions simultaneously
- **Module Execution Items**: Different versions/configurations of the module
- **Configuration Files**: Appears as tabs in the main panel
- **Log Files**: Appears as tabs in the main panel

![custom-module-screen3](https://oss.macphpstudy.com/image/custom-module-screen3.png)

### Step 5: Add Execution Item
Click "Add" under Execution Items to configure:

- **Run with sudo** (macOS only): For commands requiring elevated privileges
- **Command/File**: The executable command or script file (.sh/.ps1/.cmd/.bat)
- **PID File Path**: For service status monitoring
- **Configuration Files**: Editable via the operation popup
- **Log Files**: Viewable via the operation popup

For our etcd example:
```shell
cd "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64" && ./etcd --config-file "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64/etcd.yaml"
```

![custom-module-screen4](https://oss.macphpstudy.com/image/custom-module-screen4.png)

### Step 6: Access Your Module
Your custom module now appears in the left sidebar. Click to access its interface.

![custom-module-screen5](https://oss.macphpstudy.com/image/custom-module-screen5.png)

View and edit configuration files:

![custom-module-screen6](https://oss.macphpstudy.com/image/custom-module-screen6.png)

### Step 7: Start the Service
Click the "Start" button on your execution item.

![custom-module-screen7](https://oss.macphpstudy.com/image/custom-module-screen7.png)

### Step 8: Verify Operation
Check Tools → Process Kill to confirm etcd is running.

![custom-module-screen8](https://oss.macphpstudy.com/image/custom-module-screen8.png)

### Step 9: Monitor Logs
View output and error logs via the operation buttons.

![custom-module-screen9](https://oss.macphpstudy.com/image/custom-module-screen9.png)
![custom-module-screen10](https://oss.macphpstudy.com/image/custom-module-screen10.png)

## Conclusion
You've now successfully added a custom module to FlyEnv! We welcome your feedback and experience sharing. For any questions or feature requests, please visit our [Discussions](https://github.com/xpf0000/FlyEnv/discussions) or [Issues](https://github.com/xpf0000/FlyEnv/issues) pages.
