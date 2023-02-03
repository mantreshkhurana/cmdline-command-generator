import os
import sys
import userpath
import shutil
import platform

running_on = platform.system()
architecture = platform.machine()

install = input(f"\nRunning on: {running_on}\nArchitecture: {architecture}\n\nWhich program do you want to install?\n1. Flutter\n2. Node.js\n3. Git\n4. Docker\n5. Android Studio\n6. VS Code\n7. Ruby\n8. Go\n9. Rust\n10. Java JDK\n11. Java JRE\n\nTo exit type(exit/quit/q)\n\n> ")

if install == "1":
    if running_on == "Windows":
        print("Installing Flutter on Windows...")
    elif running_on == "Linux":
        print("Installing Flutter on Linux...")
    elif running_on == "Darwin":
        print("Installing Flutter on MacOS...")

elif install == "2":
    if running_on == "Windows":
        print("Installing Node.js on Windows...")
    elif running_on == "Linux":
        print("Installing Node.js on Linux...")
    elif running_on == "Darwin":
        print("Installing Node.js on MacOS...")

elif install == "3":
    if running_on == "Windows":
        print("Installing Git on Windows...")
    elif running_on == "Linux":
        print("Installing Git on Linux...")
    elif running_on == "Darwin":
        print("Installing Git on MacOS...")
    
elif install == "4":
    if running_on == "Windows":
        print("Installing Docker on Windows...")
    elif running_on == "Linux":
        print("Installing Docker on Linux...")
    elif running_on == "Darwin":
        print("Installing Docker on MacOS...")

elif install == "5":
    if running_on == "Windows":
        print("Installing Android Studio on Windows...")
    elif running_on == "Linux":
        print("Installing Android Studio on Linux...")
    elif running_on == "Darwin":
        print("Installing Android Studio on MacOS...")

elif install == "6":
    if running_on == "Windows":
        print("Installing VS Code on Windows...")
    elif running_on == "Linux":
        print("Installing VS Code on Linux...")
    elif running_on == "Darwin":
        print("Installing VS Code on MacOS...")

elif install == "7":
    if running_on == "Windows":
        print("Installing Ruby on Windows...")
    elif running_on == "Linux":
        print("Installing Ruby on Linux...")
    elif running_on == "Darwin":
        print("Installing Ruby on MacOS...")

elif install == "8":
    if running_on == "Windows":
        print("Installing Go on Windows...")
    elif running_on == "Linux":
        print("Installing Go on Linux...")
    elif running_on == "Darwin":
        print("Installing Go on MacOS...")
        
elif install == "9":
    if running_on == "Windows":
        print("Installing Rust on Windows...")
    elif running_on == "Linux":
        print("Installing Rust on Linux...")
    elif running_on == "Darwin":
        print("Installing Rust on MacOS...")

elif install == "10":
    if running_on == "Windows":
        print("Installing Java JDK on Windows...")
    elif running_on == "Linux":
        print("Installing Java JDK on Linux...")
    elif running_on == "Darwin":
        print("Installing Java JDK on MacOS...")

elif install == "11":
    if running_on == "Windows":
        print("Installing Java JRE on Windows...")
    elif running_on == "Linux":
        print("Installing Java JRE on Linux...")
    elif running_on == "Darwin":
        print("Installing Java JRE on MacOS...")

elif install == "exit" or install == "quit" or install == "q":
    print("Exiting...")
    sys.exit()

else:
    print("Invalid option!")