---
title: What is Markdoc?
---

# {% $frontmatter.title %} {% #overview %}

Markdoc is a Markdown-based syntax and toolchain for creating custom documentation sites. Stripe created Markdoc to power [our public docs](http://stripe.com/docs).

{% callout type="check" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /callout %}

## Vue components

_Plain HTML blocks, including inline Vue components, won't be easy to add until Markdoc supports unescaped HTML_

<MyComponent />


## Shiki Twoslash highlighted code

```ts
// Hello world
const a: string = "123"
const b: number = 345
```
