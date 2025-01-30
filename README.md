```tsx
<div className="max-w-md h-auto">
	<video
		src="https://ik.imagekit.io/deus/xlargex.mp4?tr=w-500"
		loop
		muted
		autoPlay
		poster="https://ik.imagekit.io/deus/xlargex.mp4/ik-thumbnail.jpg?tr=so-2"
	/>
</div>
```

** Escogiendo el archivo de manifiesto **
https://ik.imagekit.io/deus/xlargex.mp4/ik-master.m3u8?tr=sr-240_360_720_1080

** VideoJs o el mismo de imagekit **

```bash
  bun i video.js
```

```tsx
import videojs from "video.js";
import "video.js/dist/video-js.css";
```

** Usando ImageKit **

```bash
bun i imagekitio-react
```

```tsx
import { IKVideo } from "imagekitio-react";
```
