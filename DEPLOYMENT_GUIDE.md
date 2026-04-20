# Deployment Guide

This document outlines the instructions for deploying the application to multiple school computers.

## Pre-requisites
- Ensure all computers meet the minimum system requirements.
- Install the necessary software dependencies (e.g., Python, libraries).

## Deployment Steps
1. **Download the Application**  
   Go to the repository link and download the application files.

2. **Transfer Files**  
   Use a USB drive or a network transfer tool to copy the files to each school computer.

3. **Install Dependencies**  
   On each computer, navigate to the application directory and install the required dependencies:  
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Settings**  
   Edit the configuration files as required for each school environment.  
   Make sure to set database connections and other environment variables.

5. **Run the Application**  
   Start the application using the command:  
   ```bash
   python app.py
   ```

6. **Verify Deployment**  
   Access the application through the browser and check for any errors.

## Troubleshooting
- If the application does not start, check the logs for any errors. 
- Ensure that all dependencies are correctly installed.

## Contact
For further assistance, contact the IT department.