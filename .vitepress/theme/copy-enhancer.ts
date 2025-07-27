import { REPOSITORY } from "../constant";

export default () => {
    if (typeof window === 'undefined') return;

    document.addEventListener('copy', function (e: ClipboardEvent) {
        const selection = document.getSelection();
        if (!selection) return;

        const pageUrl = window.location.href;
        const copyright = `\n\n——\n链接：${pageUrl}\n来源：${REPOSITORY}\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`;

        const copiedText = selection.toString() + copyright;

        e.clipboardData?.setData('text/plain', copiedText);
        e.preventDefault(); // 阻止默认复制行为
    });
}
