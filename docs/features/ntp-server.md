---
layout: doc
titleTemplate: false
title: 'NTP Server Plugin: Local Time Simulation for Testing | FlyEnv'
description: 'Run a local NTP server in FlyEnv. Serve real time with upstream sync, shift the clock by a running offset or freeze it at a fixed instant for repeatable tests.'
---

# NTP Server in FlyEnv

Use the NTP Server plugin when an app or device under test reads time over NTP. Serve a clock that runs seven days ahead to check how a device handles expiry, or freeze responses at a specific instant to reproduce a date-sensitive bug. The simulated time is served in NTP replies while the FlyEnv computer keeps its normal system time.

## Install the plugin and start the service

1. Install **NTP Server** from **[Settings → Plugin Market](/features/plugin-market)** and open the module in the FlyEnv sidebar.
2. Open **Version** and install a server release. FlyEnv offers matching x64 and ARM64 builds for Windows, macOS and Linux and verifies each download against its SHA-256 digest.
3. Open **Configuration** to set the clock mode and listener. Save your changes, then select the installed version and start it from **Service**. Saving while the service is running restarts it to apply your settings.

![NTP Server listed as installed in the Official tab of FlyEnv Plugin Market](https://oss.macphpstudy.com/image/features/plugin/ntp-server-plugin-market.webp)

Use **Service** to check the running state or stop and restart the server. Plugin updates are managed separately in the Plugin Market.

## Choose the time served to clients

In **Configuration**, switch to **Common Settings** and select a **Clock mode**. The **Raw File** view edits the same JSON configuration directly.

- **Real time** serves the current time. **Upstream synchronization** is enabled by default. You can change **Upstream servers** using comma-separated hostnames or `host:port` entries. Without an upstream sync, the service can report an unsynchronized clock that some clients ignore.
- **Offset** serves a clock that keeps ticking with a fixed offset from the host clock. Enter a positive or negative whole number of seconds, or choose **+7 days**, **−2 hours** or **+365 days**.
- **Frozen** serves the same instant on every request. Choose a date and time in your local time zone. FlyEnv saves that instant in UTC.

![NTP Server Common Settings showing Offset mode, time presets, the listen address and UDP port](https://oss.macphpstudy.com/image/features/plugin/ntp-server-configuration.webp)

**Reset to real time** changes the clock mode in the editor. Save the configuration to apply it. Some system NTP clients reject large time jumps or repeated timestamps. A test client that lets you inspect the returned NTP timestamp is useful for checking either simulated mode.

## Connect a local or LAN client

The default listener is `0.0.0.0` on UDP port `12300`. Once the server is running, click the green network icon in **Service** to open **How to use NTP Server** and see the configured address and port.

![NTP Server Service tab showing a running version and the green connection details button](https://oss.macphpstudy.com/image/features/plugin/ntp-server-service.webp)

- **On the FlyEnv computer** use `127.0.0.1` with UDP port `12300` under the default configuration. Set **Listen IP restriction** to `127.0.0.1` if the server should accept local requests only.
- **From another device on your LAN** bind the server to the FlyEnv computer's LAN IP or leave the default all-IPv4 listener. Enter the computer's LAN IP and the configured UDP port in the client.
- **For a client that requires the standard NTP port**, set **UDP port** to `123` and check that it is available on the selected interface.

## Inspect requests and startup errors

In **Configuration**, use **Log client requests** to control whether the service records client requests and the time returned. Open **Log → Service log** to check whether your test client reached the server and what timestamp it received. If the service fails to start, open **Log → Startup errors** for details such as a port already in use.

![NTP Server service log showing startup, clock mode and the UDP listener](https://oss.macphpstudy.com/image/features/plugin/ntp-server-log.webp)

FlyEnv keeps `config.json`, `ntp.log` and `ntp-start-error.log` in `server/ntp-server` under its data directory. The configuration persists when you reinstall the server executable.

See the [NTP Server project documentation](https://github.com/xpf0000/ntp-server#local-test-clock-and-flyenv-configuration) for the daemon's JSON clock settings.
