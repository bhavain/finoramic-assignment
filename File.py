import json
import subprocess
import sys

with open('/projectDependencies.json') as f:
  data = json.load(f)

uninstalled_packages = []

for dep in data["Dependencies"]:
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", dep.split('==')[0]], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except subprocess.CalledProcessError as e:
        uninstalled_packages.append(dep.split('==')[0])
    

if len(uninstalled_packages) == 0:
    print("success")
else:
    print("These are the uninstalled packages")
    for packages in uninstalled_packages:
        print(packages,sep='\n')

