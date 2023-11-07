To add the InAppBrowser package to Android you need to follow the following instructions

1.- In the android\build.gradle file add the following lines in the ext object

    androidXAnnotation = "1.2.0"
    androidXBrowser = "1.3.0"
    ndkVersion = "23.1.7779620"

2.- In the android\settings.gradle file we must add the following lines

    include ':react-native-inappbrowser-reborn'
    project(':react-native-inappbrowser-reborn').projectDir = new 
    File(rootProject.projectDir, '../node_modules/react-native-inappbrowser-reborn/android')

3.- In the android\app\build.gradle file we must add the following line to the dependencies object

    implementation(':react-native-inappbrowser-reborn')

4.- In the file android\app\src\main\java\com\jobs\MainApplication.java we must add the following lines

    import com.proyecto26.inappbrowser.RNInAppBrowserPackage;

    packages.add(new RNInAppBrowserPackage());