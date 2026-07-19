# SignPath Special Thanks Design

## Goal

Add SignPath to the FlyEnv license page's “Special Thanks” section in both English and Chinese, using the wording and links from the FlyEnv repository README.

## Scope

- Update only `docs/components/AppSponsorPage/v2.vue`, which renders both `/license` and `/zh/license`.
- Keep the existing F4nniu acknowledgement unchanged.
- Do not modify the existing download URL changes in `docs/components/AppDown/index.vue`.

## Presentation

Add a second standalone acknowledgement card below the F4nniu card. Reuse the current card styling and add a small list wrapper with consistent spacing between cards. Use an `SP` text avatar so the page does not depend on an external image asset.

The organization name links to `https://signpath.io`. The certificate provider named in the description links to `https://signpath.org`. Both links open in a new tab and use `noopener noreferrer`.

## Copy

English:

> Free code signing for FlyEnv on Windows is provided by SignPath.io, with the certificate provided by SignPath Foundation.

Chinese:

> FlyEnv 的 Windows 免费代码签名由 SignPath.io 提供，证书由 SignPath Foundation 提供。

The two translated descriptions are stored in the component's existing `messages` object so locale selection continues to work through the current `i18n` prop.

## Error Handling and Compatibility

The acknowledgement is static content and introduces no data flow or runtime error state. Existing responsive layout, dark mode styling, and locale routing remain unchanged.

## Verification

1. Run `yarn docs:build` and require an exit code of 0.
2. Confirm the generated English and Chinese license pages contain the SignPath acknowledgement.
3. Review the final diff to ensure only the design document and the intended license component changed, while preserving the user's existing download URL edits.
