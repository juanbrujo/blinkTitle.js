# blinkTitle.js
Is a Pure Javascript Implementation of TitleBar Alert or Notification.It Can Perform Blinking of HTML Titlebar for Titlebar Alert or Titlebar Notification http://argunner.github.io/blinkTitle.js/

#Preview
![Preview](https://github.com/argunner/blinkTitle.js/blob/master/op.gif)

#Usage
Getting Started
```html
<script type="text/javascript" src="blinkTitle.js"></script>
```


####Regular Blink
```js
blinkTitle('message1','message2',delayTime,false);
````
  
####Regular Blink with Timeout (milliseconds) (stops after 'timeout')
```js
blinkTitle('message1','message2',delayTime,false,timeout);
```

####If You Want Notify When User is On Other Tab
```js
blinkTitle('message1','message2',delayTime,true);
```

####If You Want Notify When User is On Other Tab with Timeout (milliseconds) (stops after 'timeout')

```js
blinkTitle('message1','message2',delayTime,true);
```
####Stop 
```js
blinkTitleStop();
```

#Examples
http://argunner.github.io/blinkTitle.js/

#Not Yet Implemented
1. <s> Timeout Implementation </s> implemented by [@michaeldjeffrey](https://github.com/michaeldjeffrey)
2. Simplify Arguments By Converting them To JSON
3. <s>Minifying Script</s>
