# Podman Module — User Guide

## Overview and Benefits

FlyEnv 4.11.0 introduces the Podman module to provide lightweight container-based virtualization for scenarios where the standard multi-version installers are insufficient. Typical use cases include:

- Dependency and package-manager compatibility issues  
  Older software (for example PHP 5.5 or MySQL 5.6) may no longer be supported by package managers such as Homebrew or MacPorts on macOS/Linux. Podman lets you run these legacy versions in isolated environments.

- Strong isolation and sandboxing  
  When running untrusted or unknown code, Podman provides a fully isolated environment separate from the host to reduce security and stability risks.

- Fast deployment of Docker Compose projects  
  Projects already defined using Docker Compose can be deployed with minimal changes, lowering migration and startup effort.

The Podman module helps address these needs by offering VM/container management, image handling, Docker Compose compatibility, and isolated runtime environments.

## User Guide

### 1. Virtual Machine (VM) Management

1. Start a VM
   - Open the Podman module and navigate to the VM management screen.
   - Select the VM by name and click the Start button. The VM will boot.

2. Stop a VM
   - Find the VM in the list and click Stop to shut it down safely.

3. View VM details
   - Select a VM to see its status and configuration (CPU, memory, disk, etc.).

![podman-1](https://oss.macphpstudy.com/image/podman-1.webp)
![podman-2](https://oss.macphpstudy.com/image/podman-2.webp)

4. Create a VM with custom settings
   - When creating a new VM you can specify CPU, memory, storage, and other options.
   - Fill in the fields and click Create to provision the VM with your chosen parameters.

![podman-3](https://oss.macphpstudy.com/image/podman-3.webp)

### 2. Docker Compose Management

1. Quick-create Docker Compose stacks
   - Use available module templates to quickly scaffold docker-compose setups for common stacks.

![podman-4](https://oss.macphpstudy.com/image/podman-4.webp)
![podman-5](https://oss.macphpstudy.com/image/podman-5.webp)
![podman-6](https://oss.macphpstudy.com/image/podman-6.webp)

2. Import an existing docker-compose.yml
   - Use the import feature to add a local docker-compose.yml into Podman.

![podman-7](https://oss.macphpstudy.com/image/podman-7.webp)
![podman-8](https://oss.macphpstudy.com/image/podman-8.webp)

3. Start / Stop compose projects
   - From the Compose management view you can start or stop all services in a stack with a single action.

![podman-9](https://oss.macphpstudy.com/image/podman-9.webp)
![podman-10](https://oss.macphpstudy.com/image/podman-10.webp)

4. View compose logs
   - Inspect logs for individual services to troubleshoot and monitor behavior.

![podman-11](https://oss.macphpstudy.com/image/podman-11.webp)
![podman-12](https://oss.macphpstudy.com/image/podman-12.webp)

### 3. Image Management

1. Pull images
   - Enter the image name and tag, then click Pull to download images from remote registries.

![podman-13](https://oss.macphpstudy.com/image/podman-13.webp)
![podman-14](https://oss.macphpstudy.com/image/podman-14.webp)

2. Remove images
   - Select images from the list and click Delete to remove them from local storage.

![podman-15](https://oss.macphpstudy.com/image/podman-15.webp)

3. Import images
   - Import local image files into Podman using the Import option.

4. Export images
   - Select an image and export it to a file for backup or transfer.

![podman-16](https://oss.macphpstudy.com/image/podman-16.webp)

### 4. Container Management

1. Add a container
   - Create a container by selecting or entering an image and configuring network, storage, and other options, then click Add.

![podman-17](https://oss.macphpstudy.com/image/podman-17.webp)

2. Remove a container
   - Choose a container in the list and click Delete to remove it.

3. View container details
   - Inspect a container’s state, configuration, and logs from its detail page.

![podman-18](https://oss.macphpstudy.com/image/podman-18.webp)
![podman-19](https://oss.macphpstudy.com/image/podman-19.webp)

4. Start / Stop containers
   - Control runtime state with Start and Stop actions.

![podman-20](https://oss.macphpstudy.com/image/podman-20.webp)
![podman-21](https://oss.macphpstudy.com/image/podman-21.webp)

5. Export a container
   - Export a container to a file for sharing or backup.

6. Commit container to an image
   - Save the current container state as a new image for later reuse.

![podman-23](https://oss.macphpstudy.com/image/podman-23.webp)

7. Exec into a container
   - Open a shell in the container to run commands interactively.

![podman-24](https://oss.macphpstudy.com/image/podman-24.webp)
![podman-25](https://oss.macphpstudy.com/image/podman-25.webp)

8. View container logs
   - Access real-time and historical logs to help diagnose issues.

![podman-22](https://oss.macphpstudy.com/image/podman-22.webp)

This covers the main features of the Podman module in FlyEnv 4.11.0. Use it to run legacy software, create isolated test sandboxes, or deploy Docker Compose-based projects