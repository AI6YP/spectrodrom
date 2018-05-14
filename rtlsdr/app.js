const rtlsdr = require('rtl-sdr');

const tunerTypes = [
    "UNKNOWN",
    "E4000",
    "FC0012",
    "FC0013",
    "FC2580",
    "R820T",
    "R828D"
];

console.log(rtlsdr);

const deviceCount = rtlsdr.get_device_count();
console.log(`Found ${deviceCount} device(s)`);

for (let i = 0; i < deviceCount; i += 1) {
    const deviceName = rtlsdr.get_device_name(i);
    console.log(`Found ${deviceName} device`);

    const vendor = Buffer.alloc(256)
    const product = Buffer.alloc(256)
    const serial = Buffer.alloc(256)

    const error = rtlsdr.get_device_usb_strings(i, vendor, product, serial);
    console.log(vendor.toString(), product.toString(), serial.toString());

    const device = rtlsdr.open(i);

    const tunerType = rtlsdr.get_tuner_type(device);
    console.log(tunerTypes[tunerType]);
    //
    // const closeErr = rtlsdr.close(i);


}
