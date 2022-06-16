
function get_studiengaenge(){
    return {
            "Informatik Bsc":
                {
                "types": 
                    {
                        "Pflicht": 100,
                        "Kern": 20,
                        "Seminar": 5,
                        "Vertiefungs": 10,
                        "SQ": 10,
                        "Ergänzungs": 20,
                        "Bachelorseminar": 5,
                        "Bachelorarbeit": 10
                    },
                "colors":
                    {
                        "Pflicht": "LightSkyBlue",
                        "Kern": "LightSkyBlue",
                        "Seminar": "LightSkyBlue",
                        "Vertiefungs": "LightSkyBlue",
                        "SQ": "LightPink",
                        "Ergänzungs": "Coral",
                        "Bachelorseminar": "Gold",
                        "Bachelorarbeit": "Gold"
                    },
                "default_semester": 6,
                "modules":
                    {
                        "Pflicht":
                            [
                                {"name": "Analysis", "modulnr": "10-201-1011", "lp": 10, "color": "LightGreen", "semester": 1, "turnus": 0, "type": "Pflicht"},
                                {"name": "Diskrete Strukturen", "modulnr": "10-201-1602", "lp": 5, "color": "LightSkyBlue", "semester": 1, "turnus": 0, "type": "Pflicht"},
                                {"name": "Algorithmen und Datenstrukturen 1", "modulnr": "10-201-2001-1", "lp": 5, "color": "LightSkyBlue", "semester": 1, "turnus": 0, "type": "Pflicht"},
                                {"name": "Modellierung und Programmierung 1", "modulnr": "10-201-2005-1", "lp": 5, "color": "LightSkyBlue", "semester": 1, "turnus": 0, "type": "Pflicht"},
                                {"name": "Grundlagen der Technischen Informatik 1", "modulnr": "10-201-2006-1", "lp": 5, "color": "LightSkyBlue", "semester": 1, "turnus": 0, "type": "Pflicht"},
                                {"name": "Lineare Algebra", "modulnr": "10-201-1015", "lp": 10, "color": "LightGreen", "semester": 2, "turnus": 1, "type": "Pflicht"},
                                {"name": "Algorithmen und Datenstrukturen 2", "modulnr": "10-201-2001-2", "lp": 5, "color": "LightSkyBlue", "semester": 2, "turnus": 1, "type": "Pflicht"},
                                {"name": "Modellierung und Programmierung 2", "modulnr": "10-201-2005-2", "lp": 5, "color": "LightSkyBlue", "semester": 2, "turnus": 1, "type": "Pflicht"},
                                {"name": "Praktikum Objektorientierte Programmierung", "modulnr": "10-201-2011", "lp": 5, "color": "LightSkyBlue", "semester": 2, "turnus": 1, "type": "Pflicht"},
                                {"name": "Logik", "modulnr": "10-201-2108-1", "lp": 5, "color": "LightSkyBlue", "semester": 2, "turnus": 1, "type": "Pflicht"},
                                {"name": "Wahrscheinlichkeitstheorie", "modulnr": "10-201-1802", "lp": 5, "color": "LightGreen", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Betriebs- und Kommunikationssysteme", "modulnr": "10-201-2004", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Automaten und Sprachen", "modulnr": "10-201-2108-2", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Datenbanksysteme 1", "modulnr": "10-201-2211", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Softwaretechnikpraktikum", "modulnr": "10-201-2320", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Softwaretechnik", "modulnr": "10-201-2321", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Grundlagen der Technischen Informatik 2", "modulnr": "10-201-2006-2", "lp": 5, "color": "LightSkyBlue", "semester": 4, "turnus": 1, "type": "Pflicht"},
                                {"name": "Berechenbarkeit", "modulnr": "10-201-2009", "lp": 5, "color": "LightSkyBlue", "semester": 4, "turnus": 1, "type": "Pflicht"}
                            ],
                        "SQ":
                            [
                                {"name": "Projektmanagement", "modulnr": "10-202-2501", "lp": 5, "color": "LightPink", "turnus": 1, "type": "SQ"},
                                {"name": "Management", "modulnr": "10-201-2501", "lp": 5, "color": "LightPink", "turnus": 0, "type": "SQ"},
                                {"name": "Englisch im Projektmanagement", "modulnr": "30-SQM-39", "lp": 10, "color": "LightPink", "turnus": 3, "type": "SQ"}
                            ],
                        "Kern":
                            [
                                {"name": "Internetanwendungen", "modulnr": "10-201-2106", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["T", "A", "P"]},
                                {"name": "Rechnernetze", "modulnr": "10-201-2107", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["T", "A", "P"]},
                                {"name": "Praktikum Internetanwendungen ", "modulnr": "10-201-2111", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["T", "A", "P"]},
                                {"name": "Computergrafik", "modulnr": "10-201-2209", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["A"]},
                                {"name": "Datenbankpraktikum", "modulnr": "10-201-2210", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["P"]},
                                {"name": "Datenbanksysteme II", "modulnr": "10-201-2212", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["P"]},
                                {"name": "Information Retrieval", "modulnr": "10-201-2316", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["A"]},
                                {"name": "Linguistische Informatik", "modulnr": "10-201-2317", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["A"]},
                                {"name": "Wissensbasierte Systeme", "modulnr": "10-201-2324", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern", "specification": ["TH"]},
                                {"name": "Formale Modelle", "modulnr": "10-201-2105", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern", "specification": ["TH"]},
                                {"name": "Virtuelle und Erweiterte Realität", "modulnr": "10-201-2207", "lp": 5, "color": "LightSkyBlue", "turnus": 3, "type": "Kern", "specification": ["P", "A", "T"]},
                                {"name": "Grundlagen der Parallelverarbeitung", "modulnr": "10-201-2219", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern", "specification": ["P"]},
                                {"name": "Realisierung von Informationsystemen", "modulnr": "10-201-2224", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern", "specification": ["P", "A"]},
                                {"name": "Grundlagen des Maschinellen Lernens", "modulnr": "10-201-2315", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern", "specification": ["A"]}
                            ],
                        "Vertiefungs":
                            [
                                {"name": "Rechnernetze und Internetanwendungen", "modulnr": "10-201-2102", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Rechnersysteme", "modulnr": "10-201-2101", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Interaktive Visuelle Datenanalyse 1", "modulnr": "10-201-2206", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Parallelverarbeitung", "modulnr": "10-201-2221", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Text Mining - Wissensrohstoff Text", "modulnr": "10-201-2301", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Externes Praktikum", "modulnr": "10-201-2336", "lp": 10, "color": "LightSkyBlue", "turnus": 3, "type": "Vertiefungs"}
                            ],
                        "Seminar":
                            [
                                {"name": "Wissen in der modernen Gesellschaft", "modulnr": "10-201-2333", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Seminar"},
                                {"name": "Datenkompression", "modulnr": "10-201-2109", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Seminar"},
                                {"name": "Rechnernetze und Internetanwendungen", "modulnr": "10-201-2110", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Seminar"},
                                {"name": "Theoretische Informatik", "modulnr": "10-201-2116", "lp": 5, "color": "LightSkyBlue", "turnus": 3, "type": "Seminar"},
                                {"name": "Seminar Computergraphik", "modulnr": "10-201-2208", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Seminar"},
                                {"name": "Forschungsseminar Datenbanken", "modulnr": "10-201-2225", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Seminar"},
                                {"name": "Moderne Informationssysteme", "modulnr": "10-201-2337", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Seminar"},
                                {"name": "Intelligente Systeme", "modulnr": "10-201-2332", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Seminar"}
                            ],
                        "Ergänzungs":
                            [
                                {"name": "Web Science", "modulnr": "07-102-1201", "lp": 10, "color": "Coral", "turnus": 1, "type": "Ergänzungs"},
                                {"name": "Web-Techniken", "modulnr": "07-102-2103", "lp": 5, "color": "Coral", "turnus": 1, "type": "Ergänzungs"}
                            ],
                        "Bachelorseminar": [],
                        "Bachelorarbeit": []
                    }
                },
            "Informatik Msc":
                {
                "types":
                    {
                        "Kern": 15,
                        "Vertiefungs": 40,
                        "Ergänzungs": 20,
                        "Interne SQ": 10,
                        "Seminar": 5,
                        "Masterseminar": 5,
                        "Masterarbeit": 25
                        
                    },
                "colors":
                    {
                        "Kern": "LightSkyBlue",
                        "Vertiefungs": "LightSkyBlue",
                        "Ergänzungs": "Coral",
                        "Interne SQ": "LightPink",
                        "Seminar": "LightSkyBlue",
                        "Masterseminar": "Gold",
                        "Masterarbeit": "Gold"
                        
                    },
                "default_semester": 4,
                "modules":
                    {   
                        "Pflicht": [],
                        "Kern":
                            [
                                {"name": "Entwicklung von Medizinprodukten", "modulnr": "09-202-2415", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern"},
                                {"name": "Komplexitätstheorie", "modulnr": "10-202-2112", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern"},
                                {"name": "Mobile Peer-to-Peer Systeme", "modulnr": "10-202-2127", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern"},
                                {"name": "Soziale Netzwerke", "modulnr": "10-202-2131", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern"},
                                {"name": "Kryptographie", "modulnr": "10-202-2136", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern"},
                                {"name": "Moderne Datenbanktechnologien - Kleines Modul", "modulnr": "10-202-2215", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern"},
                                {"name": "Strukturierte Systeminnovation für die Medizin", "modulnr": "09-202-2414", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern"},
                                {"name": "Aktuelle Trends der Informatik", "modulnr": "10-202-2012", "lp": 5, "color": "LightSkyBlue", "turnus": 2, "type": "Kern"},
                                {"name": "Angewandte Automatentheorie", "modulnr": "10-202-2107", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern"},
                                {"name": "Mainframe Internet Integration", "modulnr": "10-202-2134", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern"},
                                {"name": "Anwendungsbezogene Datenbankkonzepte", "modulnr": "10-202-2213", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern"},
                                {"name": "Grundlagen Komplexer Systeme", "modulnr": "10-202-2218", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern"},
                                {"name": "Zeichnen gerichteter Graphen", "modulnr": "10-202-2223", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern"},
                                {"name": "Zeichnen ungerichteter Graphen", "modulnr": "10-202-2224", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern"},
                                {"name": "Textdatenbanken", "modulnr": "10-202-2322", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Kern"},
                                {"name": "Algorithmen der Computeralgebra", "modulnr": "10-202-2313", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Kern"}
                            ],
                        "Vertiefungs":
                            [
                                {"name": "Modellierung biologischer und molekularer Systeme", "modulnr": "09-202-2410", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Computerassistierte Chirurgie", "modulnr": "09-202-2412", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Statistische Aspekte der Analyse molekularbiologischer und genetischer Daten", "modulnr": "09-202-2413", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Statistisches Lernen", "modulnr": "09-INF-BI01", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Automatentheorie", "modulnr": "10-202-2106", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Mobile Peer-to-Peer Systeme", "modulnr": "10-202-2114", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Eingebettete Systeme", "modulnr": "10-202-2126", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Künstliche Neuronale Netze, Maschinelles Lernen und Signalverarbeitung", "modulnr": "10-202-2133", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Wissenschaftliche Visualisierung", "modulnr": "10-202-2201", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Interaktive Visuelle Datenanalyse 2", "modulnr": "10-202-2203", "lp": 10, "color": "LightSkyBlue", "turnus": 2, "type": "Vertiefungs"},
                                {"name": "Sequenzanalyse und Genomik", "modulnr": "10-202-2207", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Moderne Datenbanktechnologien", "modulnr": "10-202-2216", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Wissensrepräsentation", "modulnr": "10-202-2302", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Advanced Information Retrieval", "modulnr": "10-202-2314", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Wissens- und Content Management", "modulnr": "10-202-2323", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Softwaresystemfamilien und -produktlinien", "modulnr": "07-203-4210", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Architektur von Informationssystemen im Gesundheitswesen", "modulnr": "09-202-2409", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Informationsmanagement in der klinischen Forschung", "modulnr": "09-202-2411", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Neuroinspirierte Informationsverarbeitung", "modulnr": "10-202-2104", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Übersetzung", "modulnr": "10-202-2111A", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Syntaktische Analyse", "modulnr": "10-202-2111B", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Ausgewählte Verfahren mobiler Peer-to-Peer Systeme", "modulnr": "10-202-2111B", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Maschinelles Lernen mit empirischen Daten", "modulnr": "10-202-2135", "lp": 10, "color": "LightSkyBlue", "turnus": 2, "type": "Vertiefungs"},
                                {"name": "Medizinische Bildverarbeitung und bildgebende Verfahren in der Medizin", "modulnr": "10-202-2204", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Graphen und biologische Netze", "modulnr": "10-202-2205", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Bioinformatik von RNA- und Proteinstrukturen", "modulnr": "10-202-2208", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Visualisierung für Digital Humanities", "modulnr": "10-202-2210", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Anwendungsbezogene Datenbankkonzepte", "modulnr": "10-202-2214", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Komplexe Systeme", "modulnr": "10-202-2220", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Zeichnen von Graphen", "modulnr": "10-202-2225", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Betriebliche Informationssysteme", "modulnr": "10-202-2308", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Fortgeschrittene Methoden in der Bioinformatik", "modulnr": "10-INF-BI04", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"},
                                {"name": "Management von Informationssystemen im Gesundheitswesen", "modulnr": "09-202-2408", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Vertiefungs"},
                                {"name": "Theoretische Biologie", "modulnr": "10-INF-BI03", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Vertiefungs"}
                            ],
                        "Seminar":
                            [
                                {"name": "Forschungsseminar Datenbanken", "modulnr": "10-202-2217", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Seminar"},
                                {"name": "Gesellschaftliche Strukturen im digitalen Wandel", "modulnr": "10-202-2330", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Seminar"},
                                {"name": "Automatentheorie", "modulnr": "10-202-2115", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Seminar"},
                                {"name": "Rechnernetze und Internetanwendungen II", "modulnr": "10-202-2129", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Seminar"},
                                {"name": "Seminar Visualisierung", "modulnr": "10-202-2202", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Seminar"},
                                {"name": "Anwendungen Linguistische Informatik", "modulnr": "10-202-2307", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Seminar"},
                                {"name": "Seminarmodul Angewandte Informatik (Master)", "modulnr": "10-202-2312", "lp": 5, "color": "LightSkyBlue", "turnus": 2, "type": "Seminar"}
                            ],
                        "Interne SQ":
                            [
                                {"name": "Management", "modulnr": "10-201-2501", "lp": 5, "color": "Ivory", "turnus": 0, "type": "Interne SQ"},
                                {"name": "Projektmanagement", "modulnr": "10-202-2501", "lp": 5, "color": "Ivory", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Informatik in der Praxis: Wirtschaft und Industrie", "modulnr": "10-202-2502", "lp": 5, "color": "Ivory", "turnus": 0, "type": "Interne SQ"}
                            ],
                        "Ergänzungs":
                            [
                                {"name": "Einführung in die Medizin für Nichtmediziner", "modulnr": "09-202-4105", "lp": 5, "color": "Coral", "turnus": 0, "type": "Interne SQ"},
                                {"name": "Grundlagen der Biometrie", "modulnr": "09-202-4106", "lp": 5, "color": "Coral", "turnus": 0, "type": "Interne SQ"},
                                {"name": "Grundlagen der Strukturanalytik", "modulnr": "11-202-5102", "lp": 10, "color": "Coral", "turnus": 0, "type": "Interne SQ"},
                                {"name": "Neurobiologie 1: In vivo und in vitro Physiologie von Neuronen", "modulnr": "11-BIO-0705", "lp": 10, "color": "Coral", "turnus": 0, "type": "Interne SQ"},
                                {"name": "Biodiversität und Ökosystemfunktionen", "modulnr": "11-BIO-0740", "lp": 10, "color": "Coral", "turnus": 0, "type": "Interne SQ"},
                                {"name": "Medizin und Gesundheitsversorgung für Nichtmediziner", "modulnr": "09-202-4107", "lp": 5, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Klinische Studien und Evidenz in der Medizin", "modulnr": "09-202-4108", "lp": 5, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Bürgerwissenschaften", "modulnr": "10-202-2340", "lp": 10, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Einführung in linguistische Annotation und XML Technologien", "modulnr": "10-DIH-1001", "lp": 10, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Lineare Algebra 2", "modulnr": "10-MAT-LA01", "lp": 10, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Analysis 2", "modulnr": "10-MAT-LA02", "lp": 10, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Numerik", "modulnr": "10-MAT-LA03", "lp": 10, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Verhaltensneurogenetik", "modulnr": "11-BIO-0812", "lp": 10, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Digitale Altertumswissenschaft", "modulnr": "10-202-2343", "lp": 5, "color": "Coral", "turnus": 1, "type": "Interne SQ"},
                                {"name": "Digitale Philologie", "modulnr": "10-202-2339", "lp": 10, "color": "Coral", "turnus": 0, "type": "Interne SQ"},
                                {"name": "Linguistische Annotationen und Datenextraktion mit XQuery", "modulnr": "10-202-2342", "lp": 10, "color": "Coral", "turnus": 0, "type": "Interne SQ"},
                                {"name": "Algebra", "modulnr": "10-MAT-LA11", "lp": 15, "color": "Coral", "turnus": 2, "type": "Interne SQ"},
                                {"name": "Höhere Analysis", "modulnr": "10-MAT-LA12", "lp": 15, "color": "Coral", "turnus": 2, "type": "Interne SQ"},
                                {"name": "Funktionentheorie", "modulnr": "10-MAT-LA13", "lp": 15, "color": "Coral", "turnus": 2, "type": "Interne SQ"}
                            ],
                        "Masterseminar":
                            [],
                        "Masterarbeit":
                            []
                    }
                },
            "Bioinformatik":
                {
                "types":
                    {
                        "Pflicht": 55,
                        "Wahlpflicht Informatik": 20,
                        "Wahlpflicht Life Science": 10,
                        "Wahlpflicht Science": 10,
                        "Masterarbeit": 25
                    },
                "colors":
                    {
                        "Pflicht": "Aquamarine",
                        "Wahlpflicht Informatik": "LightSkyBlue",
                        "Wahlpflicht Life Science": "PaleGreen",
                        "Wahlpflicht Science": "Plum",
                        "Masterarbeit": "Gold"
                    },
                "default_semester": 4,
                "modules":
                    {
                        "Pflicht":
                            [
                                {"name": "Einführungsmodul Biowissenschaften", "modulnr": "10-INF-BI02", "lp": 10, "color": "PaleGreen", "turnus": 0, "type": "Pflicht", "semester": 1},
                                {"name": "Statistisches Lernen", "modulnr": "09-INF-BI01", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Pflicht", "semester": 1},
                                {"name": "Sequenzanalyse und Genomik", "modulnr": "10-202-2207", "lp": 10, "color": "MediumTurquoise", "turnus": 0, "type": "Pflicht", "semester": 1},
                                {"name": "Bioinformatik von RNA- und Proteinstrukturen", "modulnr": "10-202-2208", "lp": 10, "color": "MediumTurquoise", "turnus": 1, "type": "Pflicht", "semester": 2},
                                {"name": "Graphen und biologische Netze", "modulnr": "10-202-2205", "lp": 10, "color": "MediumTurquoise", "turnus": 0, "type": "Pflicht", "semester": 3},
                                {"name": "Theoretische Biologie", "modulnr": "10-INF-BI03", "lp": 5, "color": "MediumTurquoise", "turnus": 1, "type": "Pflicht", "semester": 4}
                            ],
                        "Wahlpflicht Informatik":
                            [
                                {"name": "Internetanwendungen", "modulnr": "10-201-2106", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht Informatik"},
                                {"name": "Rechnernetze", "modulnr": "10-201-2107", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht Informatik"},
                                {"name": "Grundlagen der Parallelverarbeitung", "modulnr": "10-201-2219", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht Informatik"},
                                {"name": "Neuroinspirierte Informationsverarbeitung", "modulnr": "10-202-2104", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht Informatik"},
                                {"name": "Künstliche Neuronale Netze, Maschinelles Lernen und Signalverarbeitung", "modulnr": "10-202-2133", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht Informatik"},
                                {"name": "Maschinelles Lernen mit empirischen Daten", "modulnr": "10-202-2135", "lp": 10, "color": "LightSkyBlue", "turnus": 3, "type": "Wahlpflicht Informatik"},
                                {"name": "Wissenschaftliche Visualisierung", "modulnr": "10-202-2201", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht Informatik"},
                                {"name": "Anwendungsbezogene Datenbankkonzepte", "modulnr": "10-202-2213", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht Informatik"},
                                {"name": "Zeichnen von Graphen", "modulnr": "10-202-2225", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht Informatik"}
                            ],
                        "Wahlpflicht Life Science":
                            [
                                {"name": "Statistische Aspekte der Analyse molekularbiologischer und genetischer Daten", "modulnr": "09-202-2413", "lp": 10, "color": "PaleGreen", "turnus": 0, "type": "Wahlpflicht Life Science"},
                                {"name": "Fortgeschrittene Methoden in der Bioinformatik", "modulnr": "10-INF-BI04", "lp": 10, "color": "PaleGreen", "turnus": 1, "type": "Wahlpflicht Life Science"},
                                {"name": "Grundlagen der Strukturanalytik", "modulnr": "11-202-5102", "lp": 10, "color": "PaleGreen", "turnus": 0, "type": "Wahlpflicht Life Science"},
                                {"name": "Neurobiologie 1: In vivo und in vitro Physiologie von Neuronen", "modulnr": "11-BIO-0705", "lp": 10, "color": "PaleGreen", "turnus": 0, "type": "Wahlpflicht Life Science"},
                                {"name": "Biodiversität und Ökosystemfunktionen", "modulnr": "11-BIO-0740", "lp": 10, "color": "PaleGreen", "turnus": 0, "type": "Wahlpflicht Life Science"},
                                {"name": "Verhaltensneurogenetik", "modulnr": "11-BIO-0812", "lp": 10, "color": "PaleGreen", "turnus": 1, "type": "Wahlpflicht Life Science"}
                            ],
                        "Wahlpflicht Science":
                            [
                                {"name": "Einführung in die Physikalische Chemie", "modulnr": "13-111-0411-N", "lp": 10, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Chemie der organischen Stoffklassen", "modulnr": "13-111-0331-N", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Einführung in die Theoretische Chemie", "modulnr": "13-111-0631-N", "lp": 5, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Molekülspektroskopie", "modulnr": "13-111-0141-N", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Einführung  in  die  Proteinchemie  und  Enzymologie", "modulnr": "11-111-1163-N", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Aktuelle Themen der Physikalischen Chemie", "modulnr": "13-111-0461-N", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Bioorganische Chemie", "modulnr": "11-121-1112", "lp": 5, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Chemische Biologie", "modulnr": "13-121-0312", "lp": 5, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Reaktivität in der Organischen Chemie", "modulnr": "13-121-0318", "lp": 5, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Biophysikalische Methoden", "modulnr": "13-121-1111", "lp": 5, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Supramolekulare Chemie in vitro und in vivo", "modulnr": "13-121-0222", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Strukturelle und Anorganische Biochemie", "modulnr": "13-121-0226", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Nanotechnologie", "modulnr": "13-121-0227", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Biochemische  Ansätze  in  der  Chemischen  Biologie", "modulnr": "13-121-0324", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Einführung in die Computersimulation I", "modulnr": "12-PHY-BW3CS1", "lp": 5, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Lineare Algebra 1", "modulnr": "10-MAT-BH1012", "lp": 10, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Analysis 1", "modulnr": "10-MAT-BH1011", "lp": 10, "color": "Plum", "turnus": 0, "type": "Wahlpflicht Science"},
                                {"name": "Lineare Algebra 2", "modulnr": "10-MAT-LA01", "lp": 10, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Analysis 2", "modulnr": "10-MAT-LA02", "lp": 10, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Gewöhnliche Differentialgleichungen", "modulnr": "10-MAT-BH1004", "lp": 5, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"},
                                {"name": "Numerik", "modulnr": "10-MAT-LA03", "lp": 10, "color": "Plum", "turnus": 1, "type": "Wahlpflicht Science"}
                            ],
                        "Masterarbeit":
                            []
                }
            },
        "Informatik Lehramt Gymnasium":
            {
                "types":
                    {
                        "Pflicht": 130,
                        "Fach 2": 105,
                        "Staatsprüfung": 30,
                        "Wahlpflicht": 20,
                        "Ergängzungsfach": 15
                    },
                "colors":
                    {
                        "Pflicht": "LightSkyBlue",
                        "Fach 2": "DarkGrey",
                        "Staatsprüfung": "Gold",
                        "Wahlpflicht": "DodgerBlue",
                        "Ergängzungsfach": "Coral"
                    },
                "default_semester": 10,
                "modules":
                    {
                        "Pflicht":
                            [
                                {"name": "Diskrete Strukturen", "modulnr": "10-201-1602", "lp": 5, "color": "LightSkyBlue", "semester": 1, "turnus": 0, "type": "Pflicht"},
                                {"name": "Algorithmen und Datenstrukturen 1", "modulnr": "10-201-2001-1", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Modellierung und Programmierung 1", "modulnr": "10-201-2005-1", "lp": 5, "color": "LightSkyBlue", "semester": 1, "turnus": 0, "type": "Pflicht"},
                                {"name": "Algorithmen und Datenstrukturen 2", "modulnr": "10-201-2001-2", "lp": 5, "color": "LightSkyBlue", "semester": 4, "turnus": 1, "type": "Pflicht"},
                                {"name": "Modellierung und Programmierung 2", "modulnr": "10-201-2005-2", "lp": 5, "color": "LightSkyBlue", "semester": 2, "turnus": 1, "type": "Pflicht"},
                                {"name": "Praktikum Objektorientierte Programmierung", "modulnr": "10-201-2011", "lp": 5, "color": "LightSkyBlue", "semester": 2, "turnus": 1, "type": "Pflicht"},
                                {"name": "Betriebs- und Kommunikationssysteme", "modulnr": "10-201-2004", "lp": 5, "color": "LightSkyBlue", "semester": 7, "turnus": 0, "type": "Pflicht"},
                                {"name": "Automaten und Sprachen", "modulnr": "10-201-2108-2", "lp": 5, "color": "LightSkyBlue", "semester": 5, "turnus": 0, "type": "Pflicht"},
                                {"name": "Datenbanksysteme 1", "modulnr": "10-201-2211", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Grundlagen der Technischen Informatik 2", "modulnr": "10-201-2006-2", "lp": 5, "color": "LightSkyBlue", "semester": 6, "turnus": 1, "type": "Pflicht"},
                                {"name": "Berechenbarkeit", "modulnr": "10-201-2009", "lp": 5, "color": "LightSkyBlue", "semester": 6, "turnus": 1, "type": "Pflicht"},
                                {"name": "Körper - Stimme - Kommunikation", "modulnr": "10-201-2009", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Pflicht"},
                                {"name": "Didaktik der Informatik - Grundlagen", "modulnr": "10-204-2005", "lp": 5, "color": "LightSkyBlue", "semester": 4, "turnus": 1, "type": "Pflicht"},
                                {"name": "Didaktik der Informatik - E-Learning und Tools", "modulnr": "10-204-2006", "lp": 5, "color": "LightSkyBlue", "semester": 5, "turnus": 1, "type": "Pflicht"},
                                {"name": "Didaktik der Informatik - Schulpraktische Übungen (SPS II/III)", "modulnr": "10-204-2002", "lp": 5, "color": "LightSkyBlue", "semester": 6, "turnus": 1, "type": "Pflicht"},
                                {"name": "Gesellschaftliche Strukturen im digitalen Wandel", "modulnr": "10-202-2330", "lp": 5, "color": "LightSkyBlue", "semester": 7, "turnus": 0, "type": "Pflicht"},
                                {"name": "Didaktik der Informatik - Fachseminar", "modulnr": "10-204-2007", "lp": 5, "color": "LightSkyBlue", "semester": 7, "turnus": 0, "type": "Pflicht"},
                                {"name": "Didaktik der Informatik - Fachdidaktisches Blockpraktikum (SPS IV/V)", "modulnr": "10-204-2004", "lp": 5, "color": "LightSkyBlue", "semester": 8, "turnus": 1, "type": "Pflicht"},
                                {"name": "Einführung in die Schulpädagogik und die Allgemeine Didaktik", "modulnr": "05-BWI-01-SEK", "lp": 10, "color": "DarkSalmon", "semester": 1, "turnus": 3, "type": "Pflicht"},
                                {"name": "Praxis- und Studienfeld Schule", "modulnr": "05-BWI-02-SEK", "lp": 5, "color": "DarkSalmon", "semester": 2, "turnus": 3, "type": "Pflicht"},
                                {"name": "Entwicklungspsychologie", "modulnr": "05-BWI-03-SEK", "lp": 5, "color": "DarkSalmon", "semester": 3, "turnus": 3, "type": "Pflicht"},
                                {"name": "Lernen und Instruktion", "modulnr": "05-BWI-04-SEK", "lp": 5, "color": "DarkSalmon", "semester": 4, "turnus": 3, "type": "Pflicht"},
                                {"name": "Bildung und Erziehung in historischer, systematischer und international vergleichender Perspektive", "modulnr": "05-BWI-05-SEK", "lp": 5, "color": "DarkSalmon", "semester": 4, "turnus": 3, "type": "Pflicht"},
                                {"name": "Diagnostik, Förderung, Beratung", "modulnr": "05-BWI-06-SEK", "lp": 5, "color": "DarkSalmon", "semester": 5, "turnus": 3, "type": "Pflicht"},
                                {"name": "Schule als Lern- und Lebensraum", "modulnr": "05-BWI-07-SEK", "lp": 5, "color": "DarkSalmon", "semester": 5, "turnus": 3, "type": "Pflicht"}
                            ],
                        "Fach 2":
                            [],
                        "Staatsprüfung": 
                            [],
                        "Wahlpflicht":
                            [
								{"name": "Internetanwendungen", "modulnr": "10-201-2106", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht", "specification": ["T", "A", "P"]},
                                {"name": "Rechnernetze", "modulnr": "10-201-2107", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht", "specification": ["T", "A", "P"]},
                                {"name": "Praktikum Internetanwendungen ", "modulnr": "10-201-2111", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht", "specification": ["T", "A", "P"]},
                                {"name": "Computergrafik", "modulnr": "10-201-2209", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht", "specification": ["A"]},
                                {"name": "Datenbankpraktikum", "modulnr": "10-201-2210", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht", "specification": ["P"]},
                                {"name": "Datenbanksysteme II", "modulnr": "10-201-2212", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht", "specification": ["P"]},
                                {"name": "Information Retrieval", "modulnr": "10-201-2316", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht", "specification": ["A"]},
                                {"name": "Linguistische Informatik", "modulnr": "10-201-2317", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht", "specification": ["A"]},
                                {"name": "Virtuelle und Erweiterte Realität", "modulnr": "10-201-2207", "lp": 5, "color": "LightSkyBlue", "turnus": 3, "type": "Wahlpflicht", "specification": ["P", "A", "T"]},
                                {"name": "Grundlagen der Parallelverarbeitung", "modulnr": "10-201-2219", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht", "specification": ["P"]},
                                {"name": "Grundlagen des Maschinellen Lernens", "modulnr": "10-201-2315", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht", "specification": ["A"]},
								{"name": "Softwaretechnikpraktikum", "modulnr": "10-201-2320", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Wahlpflicht"},
                                {"name": "Softwaretechnik", "modulnr": "10-201-2321", "lp": 5, "color": "LightSkyBlue", "semester": 3, "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Text Mining - Wissensrohstoff Text", "modulnr": "10-201-2301", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Interaktive Visuelle Datenanalyse 1", "modulnr": "10-201-2206", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Interaktive Visuelle Datenanalyse 2", "modulnr": "10-202-2203", "lp": 10, "color": "LightSkyBlue", "turnus": 2, "type": "Wahlpflicht"},
								{"name": "Zeichnen gerichteter Graphen", "modulnr": "10-202-2223", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
                                {"name": "Zeichnen ungerichteter Graphen", "modulnr": "10-202-2224", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
								{"name": "Zeichnen von Graphen", "modulnr": "10-202-2225", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
								{"name": "Neuroinspirierte Informationsverarbeitung", "modulnr": "10-202-2104", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
								{"name": "Aktuelle Trends der Informatik", "modulnr": "10-202-2012", "lp": 5, "color": "LightSkyBlue", "turnus": 2, "type": "Wahlpflicht"},
								{"name": "Übersetzung", "modulnr": "10-202-2111A", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
								{"name": "Maschinelles Lernen mit empirischen Daten", "modulnr": "10-202-2135", "lp": 10, "color": "LightSkyBlue", "turnus": 2, "type": "Wahlpflicht"},
								{"name": "Syntaktische Analyse", "modulnr": "10-202-2111B", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
								{"name": "Bioinformatik von RNA- und Proteinstrukturen", "modulnr": "10-202-2208", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
								{"name": "Visualisierung für Digital Humanities", "modulnr": "10-202-2210", "lp": 10, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
								{"name": "Grundlagen Komplexer Systeme", "modulnr": "10-202-2218", "lp": 5, "color": "LightSkyBlue", "turnus": 1, "type": "Wahlpflicht"},
								{"name": "Automatentheorie", "modulnr": "10-202-2106", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Komplexitätstheorie", "modulnr": "10-202-2112", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Kryptographie", "modulnr": "10-202-2136", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Wissenschaftliche Visualisierung", "modulnr": "10-202-2201", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Sequenzanalyse und Genomik", "modulnr": "10-202-2207", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Moderne Datenbanktechnologien - Kleines Modul", "modulnr": "10-202-2215", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Wissensrepräsentation", "modulnr": "10-202-2302", "lp": 10, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Algorithmen der Computeralgebra", "modulnr": "10-202-2313", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"},
								{"name": "Einführung in das symbolische Rechnen", "modulnr": "10-201-2313", "lp": 5, "color": "LightSkyBlue", "turnus": 0, "type": "Wahlpflicht"}
							],
                        "Ergängzungsfach":
                            [
                                {"name": "Mathematik für Wirtschaftswissenschaften I", "modulnr": "10-101-1103", "lp": 5, "color": "Coral", "turnus": 0, "type": "Ergängzungsfach"},
                                {"name": "Mathematik für Wirtschaftswissenschaften II", "modulnr": "10-101-1104", "lp": 5, "color": "Coral", "turnus": 1, "type": "Ergängzungsfach"}
                            ]
                    }
            }
                
        };
};
