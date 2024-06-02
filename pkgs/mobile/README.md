# mobile

There are a few ways you could go about this: 
1. Use React Native and just utilise common (I'm inclined to this but unsure)
2. Use Capacitor and utilise common+web.

Option 2 theoretically makes sense to me, but I'm unsure if that's a good idea as your web code becomes conflated with your mobile code, and then you might as well have a whole different codebase? But your styling should be responsive, and we're already conflating desktop and web APIs (via Tauri), what's one more if you're going to do multi-env detection anyway? I like that RN is native, but we don't have a good approximation for that besides NativeScript. I don't like NativeScript, so if someone can convince me, come on over to the [Discord](https://discord.gg/tg9ph67zTh)!