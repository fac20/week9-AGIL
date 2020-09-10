function h(tag, props, ...children) {
    const el = document.createElement(tag);
    for (let name in props) {
      if (name in el) {
        // set property on the element object if it's a valid property
        // e.g. if `name` is "id" do: el.id = props.id
        el[name] = props[name];
      } else {
        // if not a valid property set as an attribute
        // e.g. if `name` is "aria-label" do:
        // el.setAttribute("aria-label", props["aria-label"])
        el.setAttribute(name, props[name]);
      }
    }
    el.append(...children);
    return el;
  }