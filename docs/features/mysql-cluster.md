---
layout: doc
titleTemplate: false
title: 'MySQL Cluster Plugin: Multiple Instances and Replication | FlyEnv'
description: 'Run multiple local MySQL instances, create GTID source/replica groups and manage single-primary Group Replication with the FlyEnv MySQL Cluster plugin.'
---

# MySQL Cluster in FlyEnv

The MySQL Cluster plugin runs multiple local MySQL instances at the same time, each with its own port, Socket or Windows named pipe, data directory, configuration and logs. Use it for independent databases, a GTID source/replica group or single-primary Group Replication.

Install **MySQL Cluster** from **[Settings → Plugin Market](/features/plugin-market)**. The module adds **MySQL instances**, **Services** and **Versions** tabs on macOS, Windows and Linux; available database installations depend on your platform and install sources.

![MySQL Cluster instance view showing independent MySQL versions and a running source/replica group](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-instances.webp)

## Video walkthrough

Watch FlyEnv create a local MySQL source/replica environment, then check data sync, replication lag and catch-up with DbGate and a separate order demo application.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/ExFupRsveuM?rel=0" title="Set up local MySQL replication with FlyEnv" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Watch on [YouTube](https://www.youtube.com/watch?v=ExFupRsveuM) or [Bilibili](https://www.bilibili.com/video/BV1QtHw67EE9/).

## Reuse installed MySQL versions

The **Versions** tab uses FlyEnv's existing MySQL installation sources. Install a version there, or select an existing installation when creating an instance. Several instances can share one program installation while keeping separate database files. Different standalone instances can use different MySQL versions.

The **Services** tab lists database installations; instance lifecycle controls live in **MySQL instances**. A version used by running cluster instances cannot be uninstalled through the plugin until those instances stop.

## Create an independent instance

Choose **Create → Standalone**. Enter a **Cluster name**, select a **MySQL version**, set the initial **Root password** and review the generated instance settings:

- **Instance name** and **TCP port** identify the database you will connect to.
- **Socket** on macOS/Linux, or **Named pipe** on Windows, gives each instance its own local endpoint.
- **Data directory** can be entered directly or selected with the folder button.

The form validates names, port conflicts, Socket or pipe conflicts and overlapping data directories. Standalone instances support MySQL 5.7 builds with `--initialize-insecure`, as well as supported newer versions.

![Create a standalone MySQL instance with a selected version, port, Socket and data directory](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-standalone.webp)

Creation initializes a new empty database. Existing databases are not imported, cloned or overwritten. Stop the instance before editing it; an initialized data directory and its selected engine version cannot be replaced through this form.

## Create a GTID source/replica group

Choose **Source / replica**, select a MySQL installation and set the replica count. The plugin prepares one source and between **1 and 15 replicas**, including GTID replication, the replication account, read-only replicas and replication channels.

All members use the **same installation**, with **MySQL 8.0.13 or later** required. Review each member's generated name, port, Socket or pipe and data directory before creating the group.

![MySQL source/replica creation dialog with replica count and per-member connection settings](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-replication.webp)

The instance list identifies source and replica roles and includes replication delay. Ordinary starts, stops and restarts use process state and do not require Root credentials. MySQL resumes saved replication channels after restart; use **Configure / recover replication** when you need to explicitly configure or repair replication, such as after changing the source port. Start every member first and supply its current Root credentials.

Source/replica groups do not automatically promote a replica if the source stops.

## Single-primary Group Replication

Choose **Group Replication** to create **3, 5, 7 or 9 local members**. This mode requires **MySQL 8.0.27 or later** and a build that includes the Group Replication plugin. FlyEnv uses single-primary mode and XCom communication; SQL ports and GR communication ports must be unique.

![MySQL Group Replication creation dialog with node count and separate SQL and GR communication ports](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-group-replication.webp)

MySQL handles primary election within a running group. FlyEnv shows member roles and provides **Configure / recover replication** for explicit recovery after members leave or the whole group stops. Start all members and provide Root credentials before recovery. The plugin checks member transaction histories and refuses an unsafe bootstrap when histories diverge or member state cannot be confirmed. A member outside the group remains read-only after restart.

These are local development groups: all nodes share one machine's failure boundary. The plugin does not add MySQL Router or a single connection endpoint; connect to the appropriate member's port. It does not create NDB Cluster or a multi-machine deployment.

## Control instances and inspect their data

Use a row's controls to start, stop or restart that instance, or the group header to act on all its members. The sidebar switch starts or stops all plugin instances. The **State** column reports whether the process is running; replication health is separate from process state.

Each instance's action menu provides:

- **Edit configuration**, with changes applied on the next restart and managed identity/replication settings protected.
- **Error log** and **Slow query log** views for that instance.
- **Connection information**, plus a clickable Socket address for copying.
- **Data management**, with database and user lists, database creation and grants, password changes, notes, a backup directory and exports of selected databases.

Management writes require the writable source or current primary. Read-only members keep their write restrictions. Root credentials are isolated by instance; new passwords remain in the session unless you explicitly choose to remember credentials on the device.

### Open DbGate in the browser

When an instance is running, the DbGate icon beside the instance view title opens the browser panel. An installed, available **Node.js** runtime is required; the Node.js module can remain hidden in the sidebar. The first opening installs DbGate if needed, and later openings reuse FlyEnv's shared DbGate installation.

![DbGate browser panel connected to a local MySQL instance with a table open](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-dbgate.webp)

The panel is shared with MongoDB and MariaDB Cluster. Stopping the last MySQL Cluster instance closes the global panel; another module can open it again when needed.

## Keep database files when removing a group

Deleting an instance or group stops its members and removes their management records after confirmation. **Database files are retained**, together with inspectable configuration and logs. Removing a database installation through the plugin also retains instance database files. Check saved files and per-member results after an interrupted operation before retrying.

Use **[MariaDB Cluster](/features/mariadb-cluster)** for MariaDB instances and GTID replication, or return to the **[Plugin Market](/features/plugin-market)** to manage the integration.
