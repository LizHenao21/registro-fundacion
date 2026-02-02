function doPost(e) {

  try {

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const base64 = data.firma.split(",")[1];

    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64),
      "image/png",
      data.documento + "_firma.png"
    );

    const file = DriveApp.createFile(blob);

    file.setSharing(
      DriveApp.Access.ANYONE_WITH_LINK,
      DriveApp.Permission.VIEW
    );

    const imageFormula =
      '=IMAGE("' + file.getDownloadUrl() + '")';

    const values = sheet.getDataRange().getValues();

    let filaEncontrada = -1;

    for (let i = 1; i < values.length; i++) {
      if (values[i][2] == data.documento) {
        filaEncontrada = i + 1;
        break;
      }
    }

    const filaDatos = [[
      new Date(),
      data.nombre,
      data.documento,
      data.nacimiento,
      data.direccion,
      data.telefono,
      data.correo,
      data.perfil,
      data.educacion,
      data.experiencia,
      data.habilidades,
      imageFormula
    ]];

    if (filaEncontrada > 0) {
      sheet.getRange(filaEncontrada, 1, 1, 12)
           .setValues(filaDatos);
    } else {
      sheet.appendRow(filaDatos[0]);
    }

    return ContentService
      .createTextOutput("OK")
      .setMimeType(ContentService.MimeType.TEXT);

  } catch(err) {

    return ContentService
      .createTextOutput("ERROR: " + err)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
