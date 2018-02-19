# IONIC Life Cycle Event 

<h3> Pause Event </h3> 
The pause event emits when the native platform puts the application into the background, typically when the user switches to a different application.This event would emit when a Cordova app is put into the background,
however, it would not fire on a standard web browser.


```
platform.pause.subscribe((result)=>{
     console.log("Platform Pause Event");
});
```

<h3> Resize Event </h3> 
The resize event emits when the native platform pulls the application out from the background. This event would emit when a Cordova app comes
out from the background, however, it would not fire on a standard web browser.


```
platform.resize.subscribe((result)=>{
    console.log('Platform Resize Event');
});
```

<h3> Resume Event </h3> 
The resume event emits when the native platform pulls the application out from the background. This event would emit when a Cordova app comes out from the background, however, it would not fire on a standard web browser.   */

```
platform.resume.subscribe((result)=>{
    console.log('Platform Resume Event');
});     
```
## Nav Guards & Nav Controller Life Cycle Event 

### ionViewCanEnter(): Nav Guards
Fired before entering into a view, allows you to control whether the view can be accessed or not (returning true or false).
``` 
ionViewCanEnter(){
   console.log("ionViewCanEnter HomePage.");
}
```
### ionViewCanLeave(): Nav Guards
``` 
ionViewCanLeave(){
  console.log('ionViewCanLeave SecondPage.');
}
```
### ionViewDidLoad():

Fired only when a view is stored in memory. This event is NOT fired on entering a view that is already cached. It’s a nice place for init related tasks.

```
ionViewDidLoad(){
 console.log("ionViewDidLoad HomePage.");
}
```
### ionViewWillEnter():
It’s fired when entering a page, before it becomes the active one. Use it for tasks you want to do every time you enter in the view (setting event listeners, updating a table, etc.).

```
ionViewWillEnter(){
  console.log('ionViewWillEnter HomePage.');
}
```
### ionViewDidEnter(): 
Fired when entering a page, after it becomes the active page. Quite similar to the previous one.

```
ionViewDidEnter(){
  console.log('ionViewDidEnter HomePage.');
}
```
### ionViewWillLeave(): 
Fired when you leave a page, before it stops being the active one. Use it for things you need to run every time you are leaving a page (deactivate event listeners, etc.).

```
ionViewWillLeave(){
    console.log('ionViewWillLeave HomePage.');
}
```
### ionViewDidLeave(): 
Fired when you leave a page, after it stops being the active one. Similar to the previous one.

```
ionViewDidLeave(){
  console.log('ionViewDidLeave HomePage.');
}
```

### ionViewWillUnload():
Fired when a view is going to be completely removed (after leaving a non-cached view).

```
ionViewWillUnload(){
 console.log('ionViewWillUnload HomePage.');
}
```
