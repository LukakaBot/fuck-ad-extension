function HelloWorld() {
  const titleElements = document.getElementsByClassName('title-article');

  console.log(titleElements);

  if (titleElements.length > 0) {
    // 选择第一个匹配的元素
    const title: HTMLElement | undefined = titleElements[0] as HTMLElement;
    if (title) {
        title.style.color = 'red';
    }
}
  

  return <></>;
}

export default HelloWorld;
