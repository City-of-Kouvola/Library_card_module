# Library card module

This package is used as a modular extension to https://github.com/City-of-Kouvola/KouvolaCityApp.git repository for adding library card barcode functionality to the main Kouvola City app.

## Getting Started

1. Clone the repository with `git clone git@github.com:City-of-Kouvola/Library_card_module.git`
2. Navigate to Library_card_module and install required dependencies `cd Library_card_module && npm install`
3. If doing development for iOS: `cd ios && pod install`
4. Android: Open Android emulator or connect real device with [USB debugging](https://developer.android.com/studio/debug/dev-options) enabled and Run command `npx react-native run-android` to start the debug version of the application
6. iOS: Open `ios/Library_card_module.xcworkspace` in Xcode, select emulator or real device and start the application

Library card module has been developed using:

`"TypeScript”: “4.5.5"`

`"react": "17.0.2"`

`"react-native": "0.67.1"`

`"node": "16.0.0"`

## Development

When developing new features/bug fixes:

1. Create new feature/bug fix branch from the `Develop` branch
2. To get module feature visible in debug environment uncomment rows 1-6 inside the `index.ts` to get the module visible
3. Develop and test changes locally
4. Comment step 2 rows before pushing code changes to Github repository
5. Create Pull Request to the `Develop` branch

## Dependencies

* [react-native-barcode-builder](https://www.npmjs.com/package/react-native-barcode-builder) React Native component to generate barcodes.