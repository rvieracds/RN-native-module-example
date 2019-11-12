# react-native-toast-library-rviera

## Getting started

`$ npm install react-native-toast-library-rviera --save`

### Mostly automatic installation

`$ react-native link react-native-toast-library-rviera`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-toast-library-rviera` and add `ToastLibraryRviera.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libToastLibraryRviera.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.ToastLibraryRvieraPackage;` to the imports at the top of the file
  - Add `new ToastLibraryRvieraPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-toast-library-rviera'
  	project(':react-native-toast-library-rviera').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-toast-library-rviera/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-toast-library-rviera')
  	```


## Usage
```javascript
import ToastLibraryRviera from 'react-native-toast-library-rviera';

// TODO: What to do with the module?
ToastLibraryRviera;
```
