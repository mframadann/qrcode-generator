const GenerateButton = document.querySelector(".generate");
const DownloadQrCode = document.querySelector(".download");
const LinkInput = document.querySelector("#link");
const QrCode = document.querySelector(".qrcode");
const DownloadElements = document.createElement("a");

class QrCodeGnerations {
  /**
   * Methods
   */
  CreateNewQrCode(link, canvas) {
    QRCode.toCanvas(
      canvas,
      link.value,
      {
        width: 150,
        margin: 2,
      },
      (err) => {
        if (err) console.error(err);
      }
    );
  }

  DownloadQrCodes(elements, canvas) {
    elements.href = canvas.toDataURL("image/png");
    elements.download = "QRcode-[mframadan].PNG";
    elements.click();
  }
}

GenerateButton.addEventListener("click", () => {
  const QRCodeGenerator = new QrCodeGnerations();
  QRCodeGenerator.CreateNewQrCode(LinkInput, QrCode);
});

DownloadQrCode.addEventListener("click", () => {
  const QRCodeGenerator = new QrCodeGnerations();
  QRCodeGenerator.DownloadQrCodes(DownloadElements, QrCode);
});
