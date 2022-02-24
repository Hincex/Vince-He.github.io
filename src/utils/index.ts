export default class Utils {
  /**
   * 异步解析markdown文件
   * @param file markdown文件路径
   */
  static async parseMarkdownFile(file: string) {
    // const res = await fetch(file);
    // const result = await res.text();
    // return result;
    return new Promise<string>((resolve, reject) => {
      fetch(file)
        .then((res) => res.text())
        .then((text) => resolve(text));
    });
  }
}
