## Detail on useState

**Difference between setCount(count+1) vs setCount(prev=>prev+1)**

***setCount(count + 1) Direct Value***

1. count is from the current render
2. It is a snapshot
3. Does NOT see updates scheduled earlier in the same function
4. Unsafe when multiple updates, batching, async events.

***setCount(prev => prev + 1) (functional updater)***

1. prev is provided by React
2. It is ALWAYS the latest committed state
3. Safe for batching and stacking


**What setState REALLY does?**
> `setState` does NOT change state immediately.
It schedules an update for the next render.

