:warning:
# Так делать не стоит

### Магические числа
Практика программирования, когда в исходном тексте встречается числовое значение и неочевидно, что оно означает. 
Например, такой фрагмент будет плохим:
```cpp
drawSprite(53, 320, 240);
```
Человеку, который не является автором программы, трудно сказать, что такое 53, 320 или 240. 
Но если этот код переписать, всё становится на свои места:
```cpp
final int SCREEN_WIDTH = 640;
final int SCREEN_HEIGHT = 480;
final int SCREEN_X_CENTER = SCREEN_WIDTH/2;
final int SCREEN_Y_CENTER = SCREEN_HEIGHT/2;
final int SPRITE_CROSSHAIR = 53;

drawSprite(SPRITE_CROSSHAIR, SCREEN_X_CENTER, SCREEN_Y_CENTER);
```
