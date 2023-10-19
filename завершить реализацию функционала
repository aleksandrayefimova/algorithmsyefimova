class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    this.root = this._insert(this.root, key, value);
  }

  _insert(node, key, value) {
    if (node === null) {
      return new Node(key, value);
    }

    if (key < node.key) {
      node.left = this._insert(node.left, key, value);
    } else if (key > node.key) {
      node.right = this._insert(node.right, key, value);
    } else {
      // Если ключ уже существует, обновляем значение
      node.value = value;
    }

    return node;
  }

  find(key) {
    return this._find(this.root, key);
  }

  _find(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      return this._find(node.left, key);
    } else if (key > node.key) {
      return this._find(node.right, key);
    } else {
      return node.value;
    }
  }

  delete(key) {
    this.root = this._delete(this.root, key);
  }

  _delete(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this._delete(node.left, key);
    } else if (key > node.key) {
      node.right = this._delete(node.right, key);
    } else {
      // Удаляем узел с одним или без детей
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Удаляем узел с двумя детьми: находим минимальный элемент в правом поддереве
      const minRight = this._findMin(node.right);
      node.key = minRight.key;
      node.value = minRight.value;
      node.right = this._delete(node.right, minRight.key);
    }

    return node;
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  print(node) {
    if (node !== null) {
      this.print(node.left);
      console.log(`Key: ${node.key}, Value: ${node.value}`);
      this.print(node.right);
    }
  }
}

// Пример использования
const bst = new BinarySearchTree();
bst.insert(5, "Value 5");
bst.insert(3, "Value 3");
bst.insert(7, "Value 7");
bst.insert(2, "Value 2");
bst.insert(4, "Value 4");

console.log(bst.find(3)); // Выведет "Value 3"

bst.delete(3);
console.log(bst.find(3)); // Выведет null

bst.print(bst.root);
