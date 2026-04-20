'use strict';

const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

// Helper function to read data from the file
const readData = () => {
    if (fs.existsSync(DATA_FILE)) {
        return JSON.parse(fs.readFileSync(DATA_FILE));
    }
    return {};
};

// Helper function to save data to the file
const saveData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Expose IPC communication methods to the renderer process
contextBridge.exposeInMainWorld('api', {
    getData: () => readData(),
    setData: (key, value) => {
        const data = readData();
        data[key] = value;
        saveData(data);
        ipcRenderer.send('data-updated', key, value);
    },
});

// Load initial data
const initialData = readData();
ipcRenderer.send('initial-data', initialData);
