#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check if Node.js is installed
if ! command_exists node; then
  echo -e "${RED}Node.js is not installed. Please install Node.js and try again.${NC}"
  exit 1
fi

# Check if npm is installed
if ! command_exists npm; then
  echo -e "${RED}npm is not installed. Please install npm and try again.${NC}"
  exit 1
fi

echo -e "${GREEN}Updating npm to the latest version...${NC}"
npm install -g npm@latest

echo -e "${GREEN}Installing project dependencies...${NC}"
npm install

# Check if the installation was successful
if [ $? -eq 0 ]; then
  echo -e "${GREEN}All dependencies have been successfully installed!${NC}"
  echo -e "${GREEN}You can now run the project using 'npm run dev'${NC}"
else
  echo -e "${RED}An error occurred while installing dependencies. Please check the error messages above and try again.${NC}"
  exit 1
fi

