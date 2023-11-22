/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageProps {
  title: string;
}

// type T = {};

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
