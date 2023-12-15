import requests
import os
import time

alist = [
    "01f9d8b7b",
    "022280463",
    "022a99050",
    "02967f07e",
    "02e2008cd",
    "0371a05c1",
    "0446a8220",
    "04806fa5",
    "04f579cee",
    "0553b02cb",
    "056b5ea79",
    "06105b59a",
    "067bb70cb",
    "0688f331c",
    "069c58843",
    "06f1e2e48",
    "07dab152f",
    "081bc782c",
    "0827bbd28",
    "085555354",
    "085b254b3",
    "086772c31",
    "086b55eb6",
    "0899622c2",
    "08e68b895",
    "096a3e3cb",
    "097530a3d",
    "099d8df5",
    "09b09476a",
    "0a0717931",
    "0a2d14f19",
    "0a2fc54a7",
    "0a31a257",
    "0b46600c7",
    "0c14d7c59",
    "0d1188d81",
    "0d1eeb4ec",
    "0d47d9d4c",
    "0d693020a",
    "0de2ff403",
    "0de55aa70",
    "0e8146edc",
    "0fc726e57",
    "0fd77ae33",]

baseurl = "https://szhong.4399.com/4399swf/upload_swf/ftp23/csya/20171116/1/res/import/"

for i in alist:
    filename = ""
    direct_name = ""
    filename = i + '.json'
    direct_name = i[0:2]
    print(filename, direct_name, end="\n")

    url = baseurl + direct_name + "/" + filename
    resp = requests.get(url=url)
    print(resp)
    print(resp.text)
    print(resp.content)
    data = resp.content

    if direct_name not in os.listdir("./import"):
        os.mkdir("./import/"+direct_name)

    with open(f"./import/{direct_name}/{filename}", mode="wb") as file:
        file.write(data)
    time.sleep(0.1)



