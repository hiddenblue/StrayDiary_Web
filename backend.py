

from flask import Flask, render_template, request
import os

app = Flask(__name__, static_url_path="", static_folder="static")

# 还缺少能够处理请求的部分
# 添加路由后，需要重新运行服务器
# 根目录的路由
@app.route("/")
def func1():
    print("hello")
    name = "chase"
    print(os.getcwd())
    return render_template("index.html", name=name) # 通过参数传递值
    # 对应的html通过双重花括替换 hello {{name}}



if __name__ == "__main__":
    app.run(debug=True)

