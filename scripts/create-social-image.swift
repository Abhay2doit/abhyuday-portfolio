// Optional local helper: swift scripts/create-social-image.swift (macOS).
import AppKit

let width = 1200, height = 630
let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height, bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)
let background = NSColor.white
let ink = NSColor(red: 0.14, green: 0.13, blue: 0.12, alpha: 1)
let accent = NSColor(red: 0.14, green: 0.26, blue: 0.81, alpha: 1)
background.setFill()
NSRect(x: 0, y: 0, width: width, height: height).fill()
accent.setFill()
NSRect(x: 72, y: 532, width: 1056, height: 3).fill()
func text(_ value: String, _ size: CGFloat, _ weight: NSFont.Weight, _ color: NSColor, _ rect: NSRect) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.lineBreakMode = .byWordWrapping
    (value as NSString).draw(in: rect, withAttributes: [.font: NSFont.systemFont(ofSize: size, weight: weight), .foregroundColor: color, .paragraphStyle: paragraph])
}
text("Abhyuday Bhadauriya", 30, .semibold, accent, NSRect(x: 72, y: 456, width: 1056, height: 50))
text("Applied AI.\nEngineering that delivers.", 65, .semibold, ink, NSRect(x: 72, y: 218, width: 1056, height: 190))
text("Solutions Architect · Forward-Deployed Engineering", 27, .regular, ink, NSRect(x: 72, y: 130, width: 1056, height: 50))
text("Bengaluru, India", 23, .regular, accent, NSRect(x: 72, y: 62, width: 1056, height: 40))
NSGraphicsContext.restoreGraphicsState()
try bitmap.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: "public/social-card.png"))
