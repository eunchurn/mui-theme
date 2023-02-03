# @builderhub/mui-theme

[![Publish Package to npmjs](https://github.com/eunchurn/mui-theme/actions/workflows/publish.yml/badge.svg)](https://github.com/eunchurn/mui-theme/actions/workflows/publish.yml) ![npm](https://img.shields.io/npm/dw/@builderhub%2Fmui-theme) ![npm](https://img.shields.io/npm/v/@builderhub/mui-theme?color=%2357C754&label=npm%20version) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Builderhub Platform Material UI Theme

- Custom colors
- Custom breakpoint
- Custom typography
- Custom MuiCssBaseline

## Installation

- npm

```zsh
npm i @builderhub/mui-theme
```

- yarn

```zsh
yarn add @builderhub/mui-theme
```

- pnpm

```zsh
pnpm add @builderhub/mui-theme
```

## Usage

```tsx
import React from "react";
import { BuilderhubThemeProvider } from "@builderhub/mui-theme";

export function Wrapped() {
  return (
    <BuilderhubThemeProvider>
      <App />
    </BuilderhubThemeProvider>
  );
}
```
