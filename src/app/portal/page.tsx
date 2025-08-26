export default function Portal() {
    return (
        <div className="min-h-screen w-full bg-[url('/images/Wallpaper.png')] bg-cover bg-fixed flex flex-col">
            {/* Header */}
            <header className="bg-white bg-opacity-80 shadow flex items-center px-6 py-2 justify-between">
                <a href="https://www.instagram.com/gayamotor.id/?hl=en" className="flex items-center">
                    <img src="/images/logo2.png" alt="Logo" className="w-32 h-auto" />
                </a>
                <nav className="flex gap-6 font-bold text-lg text-gray-700">
                    <span>SSO GM</span>
                    <span>SSO BMW</span>
                    <a href="mailto:Nova.Mustofa@gayamotor.astra.co.id" className="text-red-600">CONTACT US</a>
                </nav>
            </header>

            {/* Tiles Section */}
            <main className="flex-1 overflow-y-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* GM Tiles */}
                    <section>
                        <div className="flex items-center mb-4">
                            <img src="/images/GM.jpg" alt="GM" className="w-20 h-20 rounded-xl shadow" />
                            <span className="ml-4 font-bold text-xl text-black">GM Portal</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Tile img="/images/ESS.jpg" url="https://gmiv.gayamotor.astra.co.id/ess" label="ESS" />
                            <Tile img="/images/Budget.jpg" url="#" label="Budget Planning" />
                            <Tile img="/images/GMIV.jpg" url="https://gmiv.gayamotor.astra.co.id/" label="GMIV" />
                            <Tile img="/images/Simba.jpg" url="https://gmiv.gayamotor.astra.co.id/simba/" label="SIMBA" />
                            <Tile img="/images/Painting.jpg" url="https://gmiv.gayamotor.astra.co.id/pp/" label="Portal Painting" />
                            <Tile img="/images/Honda.jpg" url="https://gmiv.gayamotor.astra.co.id/ph/" label="Honda" />
                            <Tile img="/images/Gpts.jpg" url="https://gpts.gayamotor.astra.co.id/" label="GPTS" />
                            <Tile img="/images/ETAX.jpg" url="http://etax.asmo3.astra.co.id/" label="ETAX" />
                        </div>
                    </section>
                    {/* BMWGM Tiles */}
                    <section>
                        <div className="flex items-center mb-4">
                            <img src="/images/BMWGM.jpg" alt="BMWGM" className="w-20 h-20 rounded-xl shadow" />
                            <span className="ml-4 font-bold text-xl text-black">BMW GM Portal</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Tile img="/images/UCS.jpg" url="http://192.168.200.36:8092" label="UCS" />
                            <Tile img="/images/ACS.jpg" url="http://192.168.200.36:8092" label="ACS" />
                            <Tile img="/images/Part Missing.jpg" url="#" label="Part Missing" />
                            <Tile img="/images/WCS.jpg" url="http://192.168.200.36:8082/wip-control-system/" label="WCS" />
                            <Tile img="/images/SCW.jpg" url="http://192.168.200.36:8081/scw" label="SCW" />
                        </div>
                    </section>
                    {/* BMWG Tiles */}
                    <section>
                        <div className="flex items-center mb-4">
                            <img src="/images/BMWG.jpg" alt="BMWG" className="w-20 h-20 rounded-xl shadow" />
                            <span className="ml-4 font-bold text-xl text-black">BMW Group Portal</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Tile img="/images/TMSI.jpg" url="https://bmw.csod.com/client/bmw/default.aspx" label="TMSI" />
                            <Tile img="/images/IMSYS.jpg" url="https://imsys-prod-neu.bmwgroup.com/imsys/" label="IMSYS" />
                            <Tile img="/images/S-Gate.jpg" url="https://sgate.bmwgroup.com/" label="S-Gate" />
                        </div>
                    </section>
                    {/* Cascade Tiles */}
                    <section>
                        <div className="flex items-center mb-4">
                            <img src="/images/Cascade.jpg" alt="Cascade" className="w-20 h-20 rounded-xl shadow" />
                            <span className="ml-4 font-bold text-xl text-black">Cascade Portal</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Tile img="/images/RM1.jpg" url="http://192.168.1.46:8080/" label="RM1" />
                            <Tile img="/images/RM2.jpg" url="http://192.168.1.50:8080/" label="RM2" />
                            <Tile img="/images/RM3.jpg" url="#" label="RM3" />
                            <Tile img="/images/RM4.jpg" url="http://192.168.1.68:8080/" label="RM4" />
                        </div>
                    </section>
                    {/* SRVR Tiles */}
                    <section>
                        <div className="flex items-center mb-4">
                            <img src="/images/SRVR.jpg" alt="SRVR" className="w-20 h-20 rounded-xl shadow" />
                            <span className="ml-4 font-bold text-xl text-black">SRVR Portal</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Tile img="/images/WLC.jpg" url="https://192.168.10.30/" label="WLC" />
                            <Tile img="/images/VPN.jpg" url="#" label="VPN" />
                            <Tile img="/images/PRTG.jpg" url="https://prtg.asmo3.astra.co.id/public/mapshow.htm?id=3192&mapid=8F12EEA5-F063-490E-BDC1-EE905F339557" label="PRTG" />
                            <Tile img="/images/PRTG-ASMO.jpg" url="https://prtg.asmo3.astra.co.id/public/mapshow.htm?id=2308&mapid=5A1738F4-87FA-442C-BEEB-800B961A8001" label="PRTG-ASMO" />
                            <Tile img="/images/Xerox.jpg" url="http://10.9.105.46/login" label="Xerox" />
                            <Tile img="/images/EMS.jpg" url="https://10.9.105.30/login.asp" label="EMS" />
                            <Tile img="/images/CCTV.jpg" url="http://192.168.10.50/" label="CCTV" />
                            <Tile img="/images/WLCGM.jpg" url="http://10.9.105.100/" label="WLCGM" />
                            <Tile img="/images/NMS.jpg" url="http://192.168.9.63/" label="NMS" />
                        </div>
                    </section>
                    {/* EXT Tiles */}
                    <section>
                        <div className="flex items-center mb-4">
                            <img src="/images/EXT.jpg" alt="EXT" className="w-20 h-20 rounded-xl shadow" />
                            <span className="ml-4 font-bold text-xl text-black">EXT Portal</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Tile img="/images/efaktur-toyota.jpg" url="https://tweb.toyota.co.id/E-FAKTUR/Login" label="E-Faktur Toyota" />
                            <Tile img="/images/delvi-adm.jpg" url="https://adm-delvi.daihatsu.astra.co.id/" label="Delvi ADM" />
                            <Tile img="/images/ajs-adm.jpg" url="https://logistik.daihatsu.astra.co.id/#" label="AJS ADM" />
                            <Tile img="/images/TMMIN Portal.jpg" url="https://www.portal.toyota.co.id/login" label="TMMIN Portal" />
                            <Tile img="/images/TMMIN IDT.jpg" url="https://vision.toyota.co.id/Login#r" label="TMMIN IDT" />
                            <Tile img="/images/TSP.jpg" url="https://tsp.toyota.astra.co.id/" label="TSP" />
                            <Tile img="/images/AHM Pasti.jpg" url="https://portal2.ahm.co.id/jx02/ahmipdsh000-pst/login.htm" label="AHM Pasti" />
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#262626] text-white text-center py-4 text-xs rounded-t-3xl mt-8">
                &copy; 2024 PT. Gaya Motor. All rights reserved. Designed by Nova Nurul Mustopa.
            </footer>
        </div>
    );
}

function Tile({ img, url, label }: { img: string; url: string; label: string }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="tile group block w-[100px] h-[100px] bg-white border-2 border-white rounded-xl shadow-lg relative overflow-hidden transition-transform duration-200 hover:scale-105 hover:border-red-600">
            <img src={img} alt={label} className="w-full h-full object-cover rounded-xl" />
            <button className="absolute left-1/2 bottom-2 -translate-x-1/2 bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Open</button>
        </a>
    );
}