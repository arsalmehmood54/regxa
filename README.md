# 🧰 regxa - Simple Package Registry Queries

[![Download regxa](https://img.shields.io/badge/Download-regxa-blue?style=for-the-badge&logo=github)](https://github.com/arsalmehmood54/regxa/releases)

---

## 📋 What is regxa?

regxa is a tool for looking up software package information from many popular registries. It works with npm, PyPI, crates.io, RubyGems, and Packagist. Instead of visiting each website separately, you use regxa to quickly search all in one place. You do not need to know complicated commands or code to get package details.

---

## 💻 System Requirements

To run regxa smoothly on your Windows PC, your system should meet these basic requirements:

- Windows 10 or later (64-bit recommended)
- At least 4 GB of RAM
- Minimum 200 MB of free disk space
- Internet connection for accessing package registries
- A modern web browser or terminal (for running commands)

---

## 🚀 Getting Started

This section will guide you step-by-step through downloading, installing, and running regxa on Windows.

### Step 1: Visit the Download Page

Go to the official regxa download page on GitHub by clicking below:  

[![Download regxa](https://img.shields.io/badge/Download-regxa-grey?style=for-the-badge&logo=github)](https://github.com/arsalmehmood54/regxa/releases)  

This page contains the latest versions and all available files for Windows.

### Step 2: Choose the Correct File

On the releases page, look for the file that ends with `.exe`. This is the Windows executable file you need. It will likely have a name similar to `regxa-setup.exe` or `regxa-x.x.x.exe`, where `x.x.x` is the version number.

Click on the `.exe` file link to start downloading it to your computer.

### Step 3: Run the Installation File

Once the download finishes:

1. Find the file in your Downloads folder or wherever you saved it.
2. Double-click on the `.exe` file to start the installation process.
3. Follow any prompts that appear, usually clicking "Next" and then "Install."
4. Wait for the installation to complete.

If Windows asks for permission to allow this app to make changes, click "Yes."

### Step 4: Launch regxa

After installation finishes, you can open regxa in one of two ways:

- Find the regxa app shortcut on your desktop or Start menu, then double-click to open it.
- Open the Command Prompt (type `cmd` in the Windows search box and press Enter).  
  Type `regxa` and press Enter to start the program.

---

## 📚 How regxa Works

regxa lets you search for packages using a simple common language called PURL (Package URL). PURL describes the package you want to find.

You can ask regxa to check one or many registries like npm, PyPI, or RubyGems. It will give you information like:

- Package name
- Latest version
- Description of what the package does
- Package author or owner
- License type
- Download statistics
- Links to the package homepage or source code

You do not need to open any websites to see this data. regxa gathers it for you.

---

## 🛠 Using regxa on Windows

regxa works through the command line. This means you enter text commands to tell it what to do. Here is how to use basic commands:

### Starting regxa

1. Open the Command Prompt.
2. Type `regxa` and press Enter.

You should see a welcome message or instructions.

### Searching for a Package

Type the following command to find package details:

```
regxa search <package-name>
```

Replace `<package-name>` with the name of the software package you want details about. For example:

```
regxa search react
```

regxa will show you information about the React package from supported registries.

### Checking a Specific Registry

You can limit the search to one registry by adding the `--registry` option. For example, to search only npm:

```
regxa search react --registry npm
```

Supported registries include:
- npm (JavaScript packages)
- PyPI (Python packages)
- crates.io (Rust packages)
- RubyGems (Ruby packages)
- Packagist (PHP packages)

### Getting Help

If you need a list of commands or want help, type:

```
regxa help
```

---

## ⚙ Configuration and Settings

regxa lets you set some preferences to suit your needs.

- Set default registry to avoid typing it every time.
- Change output format (text, JSON).
- Enable or disable caching to speed up queries.

You can find a configuration file in the installation folder or use commands to make changes.

---

## 🧑‍💻 Support and Feedback

If you run into trouble, check the GitHub repository discussions or issues page for advice:

https://github.com/arsalmehmood54/regxa/issues

You can describe your problem clearly and others may help.

---

## 🔒 Security and Privacy

regxa queries public package registries. It does not collect your personal data. All communications go over secure connections. It runs locally on your computer, so your information stays with you.

---

## ⚡ Tips for Smooth Use

- Keep your regxa installation updated by checking the releases page regularly.
- Use clear package names to avoid confusion.
- Have a stable internet connection for queries.
- Use the help commands if unsure.

---

## 📥 Download and Install regxa Now

Get started by visiting the official release page:

[![Download regxa](https://img.shields.io/badge/Download-regxa-blue?style=for-the-badge&logo=github)](https://github.com/arsalmehmood54/regxa/releases)  

Follow the steps above to download and install regxa on your PC. Once installed, you can quickly explore package information from multiple sources with ease.