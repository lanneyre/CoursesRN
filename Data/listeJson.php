<?php
    function genererChaineAleatoire($longueur = 10)
    {
     $caracteres = 'abcdefghijklmnopqrstuvwxyz';
     $longueurMax = strlen($caracteres);
     $chaineAleatoire = '';
     for ($i = 0; $i < $longueur; $i++)
     {
     $chaineAleatoire .= $caracteres[rand(0, $longueurMax - 1)];
     }
     return $chaineAleatoire;
    }

    function getData(){
        return json_decode('[{"id":1,"name":"phzoblh","photo":null},{"id":2,"name":"crpkbnfhtznix","photo":null},{"id":3,"name":"hwjhqc","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":4,"name":"ocicmr","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":5,"name":"ictiml","photo":null},{"id":6,"name":"lapyliypjuih","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":7,"name":"utwzlpmncibum","photo":null},{"id":8,"name":"wlzmxupdfhie","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":9,"name":"lbyoaciszp","photo":null},{"id":10,"name":"zgdjywgpuoj","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":11,"name":"leevkqdq","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":12,"name":"zrgbeezjbxyo","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":13,"name":"zmbhzuuhigefi","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":14,"name":"qjogkers","photo":null},{"id":15,"name":"wbpgcphr","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":16,"name":"mgukuayiecye","photo":null},{"id":17,"name":"yrkane","photo":null},{"id":18,"name":"gcczcbmbmff","photo":null},{"id":19,"name":"ozfdr","photo":null},{"id":20,"name":"rizsexbgsbgenpc","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":21,"name":"znmyweq","photo":null},{"id":22,"name":"nzhaxxkhdwnn","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":23,"name":"zfxdecyhgmyifv","photo":null},{"id":24,"name":"xxiplz","photo":null},{"id":25,"name":"nctwlswtcbwlj","photo":null},{"id":26,"name":"iprsdwkwsupai","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":27,"name":"ovlwblzwckxefy","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":28,"name":"jlroutarzcmpswq","photo":null},{"id":29,"name":"ngvsolifvanl","photo":null},{"id":30,"name":"laulg","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":31,"name":"hzkieazxeojelo","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":32,"name":"zevdjobvb","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":33,"name":"csgtiermjzt","photo":null},{"id":34,"name":"lzxsfndbgfiowks","photo":null},{"id":35,"name":"txfuhqhrqowrtd","photo":null},{"id":36,"name":"kcvuresdczuc","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":37,"name":"qpfuktgaa","photo":null},{"id":38,"name":"wiciph","photo":null},{"id":39,"name":"ydmgls","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":40,"name":"lplbqd","photo":null},{"id":41,"name":"vxiusatiew","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":42,"name":"vcjhdso","photo":null},{"id":43,"name":"shzas","photo":null},{"id":44,"name":"uyozjaxyizl","photo":null},{"id":45,"name":"wpujyhnvkczmjk","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":46,"name":"nrydvn","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":47,"name":"llhqnfbrat","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":48,"name":"zckklhjmlxco","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":49,"name":"ojecwrnniqdvnkf","photo":null},{"id":50,"name":"qrpeclbavxqymu","photo":null},{"id":51,"name":"ytunmdbwgiyc","photo":null},{"id":52,"name":"lokroxhtshwr","photo":null},{"id":53,"name":"oeufwjzlxxsbay","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":54,"name":"ygapfi","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":55,"name":"xflqcbbc","photo":null},{"id":56,"name":"keuhsnszykvwa","photo":null},{"id":57,"name":"ynljbbvme","photo":null},{"id":58,"name":"ehrlxqpvto","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":59,"name":"mdxcnvinygdtpmp","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":60,"name":"tzkkg","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":61,"name":"weboylfvtan","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":62,"name":"krifraxd","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":63,"name":"lnimbdotqzozag","photo":null},{"id":64,"name":"xmyogqp","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":65,"name":"joocg","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":66,"name":"phagpkcmrkj","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":67,"name":"rrxeu","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":68,"name":"ktkbckuzl","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":69,"name":"jygknzzzdqt","photo":null},{"id":70,"name":"miuzje","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":71,"name":"qsyhdw","photo":null},{"id":72,"name":"exsllot","photo":null},{"id":73,"name":"vbwqhivvkrlvwx","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":74,"name":"klkufjbkjbm","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":75,"name":"fqsefrzlxdy","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":76,"name":"dykxrwknqqas","photo":null},{"id":77,"name":"hfrocixjushtnv","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":78,"name":"conlrsqrfpyvcs","photo":null},{"id":79,"name":"xfyxiawu","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":80,"name":"ceeinhrye","photo":null},{"id":81,"name":"oqbmnmulknec","photo":null},{"id":82,"name":"zeqiowgxk","photo":null},{"id":83,"name":"cizvfnkifyyq","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":84,"name":"jeufchgao","photo":null},{"id":85,"name":"morad","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":86,"name":"sfqnmuswdvdju","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":87,"name":"lwvmi","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":88,"name":"vgxwebimh","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":89,"name":"mrkirttibzxg","photo":null},{"id":90,"name":"kzioaij","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":91,"name":"qrrmxhtgqarl","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":92,"name":"htkcfwcrmkptpgn","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":93,"name":"imprg","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":94,"name":"phbfpqrlfbelahu","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":95,"name":"lcdrpkciu","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":96,"name":"tixqmhpyvovbim","photo":null},{"id":97,"name":"hardval","photo":null},{"id":98,"name":"poaeznzevhl","photo":null},{"id":99,"name":"cgemuqu","photo":"https:\/\/www.digischool.fr\/images\/article\/17337_1.jpg"},{"id":100,"name":"smukxtmezj","photo":null}]');
    }
    $data = getData();
    $nbResult = 10;
    $offset = 1;
    $last = -1;

    if(!empty($_GET["page"]) && empty($_GET["last"])){
        $last = $_GET["page"]*$nbResult - 1;
        $offset = $_GET["page"];
    }
    if(!empty($_GET["last"])){
        $last = $_GET["last"];
    }

    $temp = [];
    $query = "";
    $search = false;

    $start = $last + 1;
    
    if(!empty($_GET["query"])){
        $query = $_GET["query"];
        $search = true;
    }
    for ($i=$start; $i < sizeof($data); $i++) { 
        # code...
        if($search){
            if(strpos($data[$i]->name, $query) !== false){
                $temp[] = $data[$i];
            }
        } else {
            $temp[] = $data[$i];
        }   
        $last = $i;
        if(sizeof($temp) == $nbResult){
            break;
        }
    }
    
    // for ($i=$start; $i <= $fin ; $i++) { 
    //     $temp[] = $data[$i-1];
    // }
    $result = [
        "page" => $offset,
        "last" => $last,
        "results" => $temp
    ];
    header("Access-Control-Allow-Origin: *");
    echo json_encode($result);