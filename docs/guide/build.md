# Build Executable from Source

You can build a CLI executable from source using Bun.
[More details here.](https://bun.sh/docs/bundler/executables)

*Note: Bun v1.1.7 or later is recommended.*

1. Clone the repo and navigate to the project directory.
2. Run the following command:
```sh
bun run compile-bin
```
3. An executable will be built for your platform, located at `./dist/nekos`<br>(or `./dist/nekos.exe` for Windows).