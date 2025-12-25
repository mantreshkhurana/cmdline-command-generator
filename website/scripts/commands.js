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
