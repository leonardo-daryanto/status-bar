
namespace statusBar {
    /**
     * for creating the status bar
     */
    //% block
    export function createStatusBar(width: number, height: number): void {
        let statusbar2 = statusbars.create(width, height, StatusBarKind.Health)
    }
    /**
     * After creating a status bar, use this block
     */
    //% block
    export function setStatusBarTo(num: number): void {
        let statusbar22 = statusbars.create(100, 40, StatusBarKind.Health)
        statusbar22.value = num
    }
    /**
     *  change the status bar
     */
    //% block
    export function changeStatusBarTo(num: number): void {
        let statusbar23 = statusbars.create(100, 40, StatusBarKind.Health)
        statusbar23.value += num
    }
}
