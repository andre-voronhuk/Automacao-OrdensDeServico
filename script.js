function redirect() {
    window.location.href = "http://192.168.100.20:7002/PortalServicos/page/atendimento/chamado.xhtml"

}

function area(param) {
    if (param == "engenharia") {
        document.getElementById("form:areaSuporte").firstElementChild.click()
        document.getElementById("form:areaSuporte").lastElementChild.click()

    } else {
        document.getElementById("form:areaSuporte").lastElementChild.click()
        document.getElementById("form:areaSuporte").firstElementChild.click()
    }
    console.log("AREA OK")

}

function tipo(param) {
    if (param == "incidente") {
        let opa = document.getElementById("form:j_id_2r:tipo").firstElementChild
        opa = opa.firstElementChild
        opa.firstElementChild.lastElementChild.click()

    } else {
        let opa = document.getElementById("form:j_id_2r:tipo").firstElementChild
        opa = opa.lastElementChild
        opa.firstElementChild.lastElementChild.click()
    }
    console.log("TIPO OK")

}


function setor(param) {
    document.getElementById("form:setorField:setor_label").click()
    if (param == "eng") {
        document.getElementById("form:setorField:setor_27").click()
    } else {

        document.getElementById("form:setorField:setor_26").click()
    }
    document.getElementById("form:setorField:setor_label").click()
    console.log("SETOR OK")
}



function servico(param) {
    document.getElementById("form:ativoServicoField:ativoServico_label").click()
    if (param == "parecer") {
        document.getElementById("form:ativoServicoField:ativoServico_27").click()

    } else {

        document.getElementById("form:ativoServicoField:ativoServico_6").click()
    }

    console.log("SERVICO OK")
}

function assunto(param) {
    document.getElementById("form:j_id_40:assunto").value = param
    console.log("ASSUNTO OK")

}

function finalizar() {
    document.getElementById("form:enviar").click()
    console.log("=========== FINALIZADO COM SUCESSO ===========")
}



function gerador() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao
    Tipo = "" //null= parecer tecnico
    Assunto = "Verifica????o di??ria dos par??metros do gerador" // NAO PODE SER NULO
    Servico = "parecer" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}



function abrirOrdem(Area, Setor, Tipo, Assunto, Servico) {
    console.log("=========== INICIANDO ABERTURA ===========")
    setTimeout(function() {
        area(Area)
        setTimeout(function() {
            setor(Setor)
            setTimeout(function() {
                tipo(Tipo)
                setTimeout(function() {
                    assunto(Assunto)
                    setTimeout(function() {
                        servico(Servico)
                        finalizar()
                        return true
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000); //delay da area
}

function sgh() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao
    Tipo = "" //null= parecer tecnico
    Assunto = "Backup di??rio do SPdata SGH em HD externo offline" // NAO PODE SER NULO
    Servico = "" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}

function portal() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao
    Tipo = "" //null= parecer tecnico
    Assunto = "Backup di??rio do portal de servi??os em HD externo offline" // NAO PODE SER NULO
    Servico = "" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}

function logs() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao
    Tipo = "" //null= parecer tecnico
    Assunto = "Backup di??rio dos logs do sistema da SPdata em HD externo offline" // NAO PODE SER NULO
    Servico = "" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}

function kayser() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao
    Tipo = "" //null= parecer tecnico
    Assunto = "Backup di??rio do sistema da Kayser em HD externo offline" // NAO PODE SER NULO
    Servico = "" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}

function pacs() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao
    Tipo = "" //null= parecer tecnico
    Assunto = "Backup di??rio do servidor de imagens PACS" // NAO PODE SER NULO
    Servico = "" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}

function servidores() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao
    Tipo = "" //null= parecer tecnico / incidente
    Assunto = "Verifica????o dos servidores HP, DELL/ integridade da sala dos servidores (temperatura, humidade relativa ETC...)" // NAO PODE SER NULO
    Servico = "parecer" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}

function ar() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao/eng
    Tipo = "" //null= Requisi????o/incidente
    Assunto = "Verifica????o di??ria da usina de Ar Comprimido" // NAO PODE SER NULO
    Servico = "parecer" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}

function o2() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao/eng
    Tipo = "" //null= Requisi????o/incidente
    Assunto = "Verifica????o di??ria do armazenamento de oxig??nio " // NAO PODE SER NULO
    Servico = "parecer" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}

function o2Backup() {
    //String sem nada significam: Tecnologia da Informacao
    Area = "" //null=Tecnologia da Informacao
    Setor = "" //null=Tecnologia da Informacao/eng
    Tipo = "" //null= Requisi????o/incidente
    Assunto = "Verifica????o di??ria do backup de oxig??nio" // NAO PODE SER NULO
    Servico = "parecer" //null=Armazenamento de Dados
    abrirOrdem(
        Area,
        Setor,
        Tipo,
        Assunto,
        Servico
    )

}


function abrirTudo() {
    setTimeout(function() {
        gerador()
        setTimeout(function() {
            gerador()
            setTimeout(function() {
                sgh()
                setTimeout(function() {
                    sgh()
                    setTimeout(function() {
                        portal()
                        setTimeout(function() {
                            portal()
                            setTimeout(function() {
                                logs()
                                setTimeout(function() {
                                    logs()
                                    setTimeout(function() {
                                        kayser()
                                        setTimeout(function() {
                                            kayser()
                                            setTimeout(function() {
                                                pacs()
                                                setTimeout(function() {
                                                    pacs()
                                                    setTimeout(function() {
                                                        servidores()
                                                        setTimeout(function() {
                                                            servidores()
                                                            setTimeout(function() {
                                                                o2()
                                                                setTimeout(function() {
                                                                    o2Backup()
                                                                    setTimeout(function() {
                                                                        ar()
                                                                    }, 6000);
                                                                }, 6000);
                                                            }, 6000);
                                                        }, 6000);
                                                    }, 6000);
                                                }, 6000);
                                            }, 6000);
                                        }, 6000);
                                    }, 6000);
                                }, 6000);
                            }, 6000);
                        }, 6000);
                    }, 6000);
                }, 6000);
            }, 6000);
        }, 6000);

    }, 200);

}
console.clear()
console.log("=========== MODULOS PRONTOS ===========")
