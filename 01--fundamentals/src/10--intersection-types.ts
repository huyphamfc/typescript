type Draggable = {
  drag: () => void;
};

type Resize = {
  resize: () => void;
};

type UIWidget = Draggable & Resize;

let textBox: UIWidget = {
  drag() {
    console.log('This is Drag method.');
  },
  resize() {
    console.log('This is Resize method.');
  },
};

console.log(textBox);
textBox.drag();
textBox.resize();
