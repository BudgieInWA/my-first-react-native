# My First React Native App

## Installing

1. Install `npm`.

1. Install the React Native CLI tool and the build dependencies.
    `install-build.sh`

### iOS

1. Buy a Mac, because Apple.
1. Install XCode.
1. Install `watchman`: `brew install watchman`.

### Android

You need to ensure that the android SDK is installed.

1. Install [Android Studio](https://developer.android.com/studio/index.html).
1. Create a project to ensure that the SDK is installed.
1. Find out where the SDK is installed and `cd` to the location.
	This was `~/Android/Sdk` for me.
1. From the SDK root, run `./tools/android` and install a bunch of stuff including SDK Tools, Platform Tools, ADB, API 23.

## Running

### iOS

1. On a mac, open `/ios/*.xcodeproj` in Xcode.
1. Click "Run".

### Android

```
export ANDROID_HOME=/home/ben/Android/Sdk/  # or bash equivalent, pointing to your Android SDK install.

$ANDROID_HOME/tools/android avd  # then launch an emulator.

react-native start --reset-cache  # and keep it running.

react-native run-android  # to compile and install the app on the running device.

react-native log-android  # to see log output (including console.log).
```
