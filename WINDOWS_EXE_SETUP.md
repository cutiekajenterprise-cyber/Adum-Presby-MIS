# Windows EXE Setup Guide

This document provides a comprehensive guide for building and deploying the Windows executable (EXE) of the application to school computers.

## Prerequisites
- Ensure that you have the latest version of Visual Studio installed on your machine.
- .NET Framework 4.7 or later must be installed.
- Access to the Adum-Presby-MIS source code repository.
- Administrative access to the school computers for deployment.

## Step 1: Clone the Repository
1. Open Git Bash or command prompt on your machine.
2. Navigate to the directory where you want to clone the repository.
   ```bash
   cd path/to/your/directory
   ```
3. Clone the repository by running:
   ```bash
   git clone https://github.com/<owner>/Adum-Presby-MIS.git
   ```

## Step 2: Build the Application
1. Open Visual Studio.
2. Click on "Open Project" and select the cloned repository folder.
3. In the Solution Explorer, right-click on the solution and select "Build Solution" (or press `Ctrl + Shift + B`).
4. Verify that there are no build errors in the Output window.
5. The executable file will typically be found in the `bin/Debug` or `bin/Release` directory.

## Step 3: Prepare for Deployment
1. Navigate to the folder containing the executable.
2. Create a new folder named `Deployment` to package necessary files for installation.
3. Copy the EXE file and any required DLLs or configuration files into the `Deployment` folder.

## Step 4: Create the Setup File (Optional)
1. You may use tools like Inno Setup or NSIS to create an installer.
2. Follow the respective tool’s documentation to include the EXE and additional files in the setup package.

## Step 5: Deploy to School Computers
1. Ensure all target computers have the required .NET Framework installed.
2. Transfer the `Deployment` folder to the school computers using a USB drive or shared network folder.
3. On the target computer, navigate to the `Deployment` folder and run the setup file (if created) or directly execute the EXE.
4. Follow on-screen instructions to finish installation.
5. Confirm that the application runs as expected by launching it post-installation. 

## Conclusion
This guide serves as a step-by-step process to set up and deploy the Windows EXE application to school computers. Ensure that all prerequisites are met and follow the process thoroughly to avoid any issues during deployment.

---

*Document created on: 2026-04-20 21:52:43 UTC*