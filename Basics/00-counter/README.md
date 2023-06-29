Instanz v-on

Usage of the v-on Inline Handlers
The v-on directive helps you to add event listeners directly on the html element. Like any other directive, everything between the double quotes gets executed as an JavaScript expression. This means you can handle a data property instantly inline. This is also called "inline handlers".

Anatomie

As you can see in the example, there is no need to use something like document.querySelector('button').addEventListener('click', () => {}) anymore. The v-on will do that for you much faster.

!!!! Siehe auch---------
Vue supports any native javascript event. E. g. v-on:change, v-on:input, v-on:mousemove etc.
--------------------------------!!!!
