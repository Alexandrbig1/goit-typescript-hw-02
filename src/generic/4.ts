interface PageProps {
  title: string;
}
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
