# BUILD INSTRUCTIONS

This document provides a step-by-step guide to build the Windows EXE installer for the Adum-Presby-MIS project.

## Prerequisites
Before you start, ensure you have the following installed:
- Visual Studio (latest version recommended)
- .NET Framework (version required by the project)
- Required third-party libraries

## Steps to Build the EXE Installer

1. **Clone the Repository**  
   Open your terminal or command prompt and clone the repository:
   ```bash
   git clone https://github.com/cutiekajenterprise-cyber/Adum-Presby-MIS.git
   cd Adum-Presby-MIS
   ```

2. **Open the Project in Visual Studio**  
   - Launch Visual Studio.
   - Open the solution file (`.sln`) located in the cloned repository folder.

3. **Restore NuGet Packages**  
   - Right-click on the solution in the **Solution Explorer**.
   - Select **Manage NuGet Packages for Solution**.
   - Click on **Restore** to download required packages.

4. **Build the Project**  
   - Ensure the configuration is set to **Release**.
   - Click on **Build** in the menu bar, then select **Build Solution** or press `Ctrl+Shift+B`.
   
5. **Create the Installer**  
   - After a successful build, navigate to the **Solution Explorer**.
   - Right-click on the Installer project and select **Build**.

6. **Locate the EXE Installer**  
   - Once the build is complete, the EXE installer will typically be found in the `bin\Release` directory of the Installer project.

7. **Test the Installer**  
   - Navigate to the output directory and run the installer to ensure it works as expected.

## Troubleshooting
If you encounter issues during the build process:
- Check the Visual Studio output window for errors.
- Ensure all prerequisites are met.
- Consult the repository’s issues page for similar problems or raise a new issue if needed.

## Conclusion
Follow these steps to successfully create the Windows EXE installer for the Adum-Presby-MIS project. Happy coding!