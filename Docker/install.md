---
title: 1. Instalación
parent: "Docker"
---


### [Introduction](#introduction)[](#introduction)

[Docker](https://www.docker.com/) is an application that simplifies the process of managing application processes in _containers_. Containers let you run your applications in resource-isolated processes. They’re similar to virtual machines, but containers are more portable, more resource-friendly, and more dependent on the host operating system.

For a detailed introduction to the different components of a Docker container, check out [The Docker Ecosystem: An Introduction to Common Components](/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components).

In this tutorial, you’ll install and use Docker Community Edition (CE) on Ubuntu. You’ll install Docker itself, work with containers and images, and push an image to a Docker Repository. Additionally, you’ll learn how to start, stop, and remove containers, as well as how to commit changes in a container to a new Docker image. This tutorial also covers how to install docker with GPU support, common errors and how to fix them, and security best practices.

Simplify deploying applications with [DigitalOcean App Platform](/products/app-platform). Deploy directly from GitHub in minutes.

## [Prerequisites](#prerequisites)[](#prerequisites)

To follow this tutorial, you will need the following:

*   One Ubuntu server set up by following [the Ubuntu initial server setup guide](/community/tutorials/initial-server-setup-with-ubuntu-22-04), including a `sudo` non-__root__ user and a firewall.
*   An account on [Docker Hub](https://hub.docker.com/) if you wish to create your own images and push them to Docker Hub, as shown in Steps 7 and 8.

## [Step 1 — Installing Docker](#step-1-installing-docker)[](#step-1-installing-docker)

The Docker installation package available in the official Ubuntu repository may not be the latest version. To ensure we get the latest version, we’ll install Docker from the official Docker repository. To do that, we’ll add a new package source, add the GPG key from Docker to ensure the downloads are valid, and then install the package.

First, update your existing list of packages:

```bash
sudo apt update
```

Next, install a few prerequisite packages which let `apt` use packages over HTTPS:

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Then add the GPG key for the official Docker repository to your system:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Add the Docker repository to APT sources:

```
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Update your existing list of packages again for the addition to be recognized:

```
sudo apt update
```

Make sure you are about to install from the Docker repo instead of the default Ubuntu repo:

```
apt-cache policy docker-ce
```

You’ll see output like this, although the version number for Docker may be different:

Output of apt-cache policy docker-ce

```
docker-ce:
  Installed: (none)
  Candidate: 5:20.10.14~3-0~ubuntu-jammy
  Version table:
     5:20.10.14~3-0~ubuntu-jammy 500
        500 https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages
     5:20.10.13~3-0~ubuntu-jammy 500
        500 https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages
```

Notice that `docker-ce` is not installed, but the candidate for installation is from the Docker repository for Ubuntu.

Finally, install Docker:

```
sudo apt install docker-ce
```

Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it’s running:

```
sudo systemctl status docker
```

The output should be similar to the following, showing that the service is active and running:

```
Output● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2022-04-01 21:30:25 UTC; 22s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 7854 (dockerd)
      Tasks: 7
     Memory: 38.3M
        CPU: 340ms
     CGroup: /system.slice/docker.service
             └─7854 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

Installing Docker now gives you not just the Docker service (daemon) but also the `docker` command line utility, or the Docker client. We’ll explore how to use the `docker` command later in this tutorial.

## [Step 2 — Executing the Docker Command Without Sudo (Optional)](#step-2-executing-the-docker-command-without-sudo-optional)[](#step-2-executing-the-docker-command-without-sudo-optional)

By default, the `docker` command can only be run the __root__ user or by a user in the __docker__ group, which is automatically created during Docker’s installation process. If you attempt to run the `docker` command without prefixing it with `sudo` or without being in the __docker__ group, you’ll get an output like this:

```
Outputdocker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.
See 'docker run --help'.
```

If you want to avoid typing `sudo` whenever you run the `docker` command, add your username to the `docker` group:

```
sudo usermod -aG docker ${USER}
```

To apply the new group membership, log out of the server and back in, or type the following:

```
su - ${USER}
```

You will be prompted to enter your user’s password to continue.

Confirm that your user is now added to the __docker__ group by typing:

```
groups
```

```
Outputsammy sudo docker
```

If you need to add a user to the `docker` group that you’re not logged in as, declare that username explicitly using:

```
sudo usermod -aG docker username
```

The rest of this article assumes you are running the `docker` command as a user in the __docker__ group. If you choose not to, please prepend the commands with `sudo`.

Let’s explore the `docker` command next.

## [Step 3 — Using the Docker Command](#step-3-using-the-docker-command)[](#step-3-using-the-docker-command)

Using `docker` consists of passing it a chain of options and commands followed by arguments. The syntax takes this form:

```
docker [option] [command] [arguments]
```

To view all available subcommands, type:

```
docker
```

As of Docker version 20.10.14, the complete list of available subcommands includes:

```
Output  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes

```

To view the options available to a specific command, type:

```
docker docker-subcommand --help
```

To view system-wide information about Docker, use:

```
docker info
```

Let’s explore some of these commands. We’ll start by working with images.

## [Step 4 — Working with Docker Images](#step-4-working-with-docker-images)[](#step-4-working-with-docker-images)

Docker containers are built from Docker images. By default, Docker pulls these images from [Docker Hub](https://hub.docker.com), a Docker registry managed by Docker, the company behind the Docker project. Anyone can host their Docker images on Docker Hub, so most applications and Linux distributions you’ll need will have images hosted there.

To check whether you can access and download images from Docker Hub, type:

```
docker run hello-world
```

The output will indicate that Docker in working correctly:

```
OutputUnable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:bfea6278a0a267fad2634554f4f0c6f31981eea41c553fdf5a83e95a41d40c38
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

...

```

Docker was initially unable to find the `hello-world` image locally, so it downloaded the image from Docker Hub, which is the default repository. Once the image downloaded, Docker created a container from the image and the application within the container executed, displaying the message.

You can search for images available on Docker Hub by using the `docker` command with the `search` subcommand. For example, to search for the Ubuntu image, type:

```
docker search ubuntu
```

The script will crawl Docker Hub and return a listing of all images whose name matches the search string. In this case, the output will be similar to this:

```
OutputNAME                             DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
ubuntu                           Ubuntu is a Debian-based Linux operating sys…   14048     [OK]
websphere-liberty                WebSphere Liberty multi-architecture images …   283       [OK]
ubuntu-upstart                   DEPRECATED, as is Upstart (find other proces…   112       [OK]
neurodebian                      NeuroDebian provides neuroscience research s…   88        [OK]
open-liberty                     Open Liberty multi-architecture images based…   51        [OK]
...

```

In the __OFFICIAL__ column, __OK__ indicates an image built and supported by the company behind the project. Once you’ve identified the image that you would like to use, you can download it to your computer using the `pull` subcommand.

Execute the following command to download the official `ubuntu` image to your computer:

```
docker pull ubuntu
```

You’ll see the following output:

```
OutputUsing default tag: latest
latest: Pulling from library/ubuntu
e0b25ef51634: Pull complete
Digest: sha256:9101220a875cee98b016668342c489ff0674f247f6ca20dfc91b91c0f28581ae
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
```

After an image has been downloaded, you can then run a container using the downloaded image with the `run` subcommand. As you saw with the `hello-world` example, if an image has not been downloaded when `docker` is executed with the `run` subcommand, the Docker client will first download the image, then run a container using it.

To see the images that have been downloaded to your computer, type:

```
docker images
```

The output will look similar to the following:

```
OutputREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ubuntu              latest              1d622ef86b13        3 weeks ago         73.9MB
hello-world         latest              bf756fb1ae65        4 months ago        13.3kB
```

As you’ll see later in this tutorial, images that you use to run containers can be modified and used to generate new images, which may then be uploaded (_pushed_ is the technical term) to Docker Hub or other Docker registries.

Let’s look at how to run containers in more detail.

## [Step 5 — Running a Docker Container](#step-5-running-a-docker-container)[](#step-5-running-a-docker-container)

The `hello-world` container you ran in the previous step is an example of a container that runs and exits after emitting a test message. Containers can be much more useful than that, and they can be interactive. After all, they are similar to virtual machines, only more resource-friendly.

As an example, let’s run a container using the latest image of Ubuntu. The combination of the __\-i__ and __\-t__ switches gives you interactive shell access into the container:

```
docker run -it ubuntu
```

Your command prompt should change to reflect the fact that you’re now working inside the container and should take this form:

```
Outputroot@d9b100f2f636:/#
```

Note the container id in the command prompt. In this example, it is `d9b100f2f636`. You’ll need that container ID later to identify the container when you want to remove it.

Now you can run any command inside the container. For example, let’s update the package database inside the container. You don’t need to prefix any command with `sudo`, because you’re operating inside the container as the __root__ user:

```
apt update

```

Then install any application in it. Let’s install Node.js:

```
apt install nodejs

```

This installs Node.js in the container from the official Ubuntu repository. When the installation finishes, verify that Node.js is installed:

```
node -v

```

You’ll see the version number displayed in your terminal:

```
Outputv12.22.9
```

Any changes you make inside the container only apply to that container.

To exit the container, type `exit` at the prompt.

Let’s look at managing the containers on our system next.

## [Step 6 — Managing Docker Containers](#step-6-managing-docker-containers)[](#step-6-managing-docker-containers)

After using Docker for a while, you’ll have many active (running) and inactive containers on your computer. To view the __active ones__, use:

```
docker ps
```

You will see output similar to the following:

```
OutputCONTAINER ID        IMAGE               COMMAND             CREATED

```

In this tutorial, you started two containers; one from the `hello-world` image and another from the `ubuntu` image. Both containers are no longer running, but they still exist on your system.

To view all containers — active and inactive, run `docker ps` with the `-a` switch:

```
docker ps -a
```

You’ll see output similar to this:

```
OutputCONTAINER ID   IMAGE         COMMAND   CREATED         STATUS                     PORTS     NAMES
1c08a7a0d0e4   ubuntu        "bash"     About a minute ago   Exited (0) 7 seconds ago             dazzling_taussig
587000e49d53   hello-world   "/hello"   5 minutes ago        Exited (0) 5 minutes ago             adoring_kowalevski
```

To view the latest container you created, pass it the `-l` switch:

```
docker ps -l
```

```
OutputCONTAINER ID   IMAGE     COMMAND   CREATED         STATUS                     PORTS     NAMES
1c08a7a0d0e4   ubuntu    "bash"    3 minutes ago   Exited (0) 2 minutes ago             dazzling_taussig
```

To start a stopped container, use `docker start`, followed by the container ID or the container’s name. Let’s start the Ubuntu-based container with the ID of `1c08a7a0d0e4`:

```
docker start 1c08a7a0d0e4
```

The container will start, and you can use `docker ps` to see its status:

```
OutputCONTAINER ID   IMAGE     COMMAND   CREATED         STATUS         PORTS     NAMES
1c08a7a0d0e4   ubuntu    "bash"    6 minutes ago   Up 8 seconds             dazzling_taussig
```

To stop a running container, use `docker stop`, followed by the container ID or name. This time, we’ll use the name that Docker assigned the container, which is `dazzling_taussig`:

```
docker stop dazzling_taussig
```

Once you’ve decided you no longer need a container anymore, remove it with the `docker rm` command, again using either the container ID or the name. Use the `docker ps -a` command to find the container ID or name for the container associated with the `hello-world` image and remove it.

```
docker rm adoring_kowalevski
```

You can start a new container and give it a name using the `--name` switch. You can also use the `--rm` switch to create a container that removes itself when it’s stopped. See the `docker run help` command for more information on these options and others.

Containers can be turned into images which you can use to build new containers. Let’s look at how that works.

## [Step 7 — Committing Changes in a Container to a Docker Image](#step-7-committing-changes-in-a-container-to-a-docker-image)[](#step-7-committing-changes-in-a-container-to-a-docker-image)

When you start up a Docker image, you can create, modify, and delete files just like you can with a virtual machine. The changes that you make will only apply to that container. You can start and stop it, but once you destroy it with the `docker rm` command, the changes will be lost for good.

This section shows you how to save the state of a container as a new Docker image.

After installing Node.js inside the Ubuntu container, you now have a container running off an image, but the container is different from the image you used to create it. But you might want to reuse this Node.js container as the basis for new images later.

Then commit the changes to a new Docker image instance using the following command.

```
docker commit -m "What you did to the image" -a "Author Name" container_id repository/new_image_name
```

The __\-m__ switch is for the commit message that helps you and others know what changes you made, while __\-a__ is used to specify the author. The `container_id` is the one you noted earlier in the tutorial when you started the interactive Docker session. Unless you created additional repositories on Docker Hub, the `repository` is usually your Docker Hub username.

For example, for the user __sammy__, with the container ID of `d9b100f2f636`, the command would be:

```
docker commit -m "added Node.js" -a "sammy" d9b100f2f636 sammy/ubuntu-nodejs
```

When you _commit_ an image, the new image is saved locally on your computer. Later in this tutorial, you’ll learn how to push an image to a Docker registry like Docker Hub so others can access it.

Listing the Docker images again will show the new image, as well as the old one that it was derived from:

```
docker images
```

You’ll see output like this:

```
OutputREPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
sammy/ubuntu-nodejs   latest              7c1f35226ca6        7 seconds ago       179MB
...

```

In this example, `ubuntu-nodejs` is the new image, which was derived from the existing `ubuntu` image from Docker Hub. The size difference reflects the changes that were made. And in this example, the change was that NodeJS was installed. So next time you need to run a container using Ubuntu with NodeJS pre-installed, you can just use the new image.

You can also build Images from a `Dockerfile`, which lets you automate the installation of software in a new image. However, that’s outside the scope of this tutorial.

Now let’s share the new image with others so they can create containers from it.

## [Step 8 — Pushing Docker Images to a Docker Repository](#step-8-pushing-docker-images-to-a-docker-repository)[](#step-8-pushing-docker-images-to-a-docker-repository)

The next logical step after creating a new image from an existing image is to share it with a select few of your friends, the whole world on Docker Hub, or other Docker registry that you have access to. To push an image to Docker Hub or any other Docker registry, you must have an account there.

To push your image, first log into Docker Hub.

```
docker login -u docker-registry-username
```

You’ll be prompted to authenticate using your Docker Hub password. If you specified the correct password, authentication should succeed.

__Note:__ If your Docker registry username is different from the local username you used to create the image, you will have to tag your image with your registry username. For the example given in the last step, you would type:

```
docker tag sammy/ubuntu-nodejs docker-registry-username/ubuntu-nodejs
```

Then you may push your own image using:

```
docker push docker-registry-username/docker-image-name
```

To push the `ubuntu-nodejs` image to the __sammy__ repository, the command would be:

```
docker push sammy/ubuntu-nodejs
```

The process may take some time to complete as it uploads the images, but when completed, the output will look like this:

```
OutputThe push refers to a repository [docker.io/sammy/ubuntu-nodejs]
e3fbbfb44187: Pushed
5f70bf18a086: Pushed
a3b5c80a4eba: Pushed
7f18b442972b: Pushed
3ce512daaf78: Pushed
7aae4540b42d: Pushed

...


```

After pushing an image to a registry, it should be listed on your account’s dashboard, like that show in the image below.

![New Docker image listing on Docker Hub](https://assets.digitalocean.com/articles/docker_1804/ec2vX3Z.png)

If a push attempt results in an error of this sort, then you likely did not log in:

```
OutputThe push refers to a repository [docker.io/sammy/ubuntu-nodejs]
e3fbbfb44187: Preparing
5f70bf18a086: Preparing
a3b5c80a4eba: Preparing
7f18b442972b: Preparing
3ce512daaf78: Preparing
7aae4540b42d: Waiting
unauthorized: authentication required
```

Log in with `docker login` and repeat the push attempt. Then verify that it exists on your Docker Hub repository page.

You can now use `docker pull sammy/ubuntu-nodejs` to pull the image to a new machine and use it to run a new container.

## [Installing Docker with GPU Support](#installing-docker-with-gpu-support)[](#installing-docker-with-gpu-support)

To install Docker with GPU support, you’ll need to follow a slightly different process than the standard Docker installation. This is because GPU support requires additional drivers and configurations to enable Docker to utilize the GPU resources. Here are the steps to help you install Docker with GPU support:

*   Ensure your system has a compatible NVIDIA GPU.
*   Install the NVIDIA driver for your GPU. You can find the installation instructions on the [NVIDIA website](https://www.nvidia.com/en-us/drivers/).
*   Install the `nvidia-docker2` package, which provides the necessary tools for Docker to interact with the NVIDIA GPU.

### [Installation Steps](#installation-steps)[](#installation-steps)

*   Add the NVIDIA Docker repository:

```
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
```

*   Update your package list and install the `nvidia-docker2` package:

```
sudo apt update && sudo apt install nvidia-docker2
```

*   Restart the Docker service to apply the changes:

```
sudo service docker restart
```

*   Verify that the NVIDIA runtime is available:

```
sudo docker info | grep Runtime
```

This should display the NVIDIA runtime as an available runtime.

### [Using GPU Support](#using-gpu-support)[](#using-gpu-support)

To use GPU support with your Docker containers, you’ll need to specify the `--gpus` flag when running your container. For example:

```
sudo docker run --gpus all nvidia/cuda:10.2-base nvidia-smi
```

This command runs a container with the NVIDIA CUDA image and executes the `nvidia-smi` command to verify GPU support.

For more information on installing and using Docker with GPU support, refer to the following resources:

*   [NVIDIA Docker](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/index.html)
*   [Docker GPU Support](https://docs.docker.com/config/containers/resource_constraints/#gpu)
*   [NVIDIA CUDA Images](https://hub.docker.com/r/nvidia/cuda/)

By following these steps and using the provided resources, you should be able to successfully install and use Docker with GPU support on your system.

## [Configuring Docker Security Best Practices](#configuring-docker-security-best-practices)[](#configuring-docker-security-best-practices)

[Docker Engine Security](https://docs.docker.com/engine/security/) is crucial to ensure that your containers and the host system are protected from potential vulnerabilities. Here are some best practices to follow:

*   __Use the least privilege principle__: Ensure that your containers run with the least privileges necessary to perform their tasks.
*   __Use a non-root user__: Run your containers as a non-root user to limit the attack surface in case of a breach.
*   __Keep your Docker version up-to-date__: Regularly update your Docker version to ensure you have the latest security patches.
*   __Use Docker Content Trust__: Enable Docker Content Trust to ensure the integrity of the images you pull from Docker Hub.
*   __Limit network exposure__: Only expose the necessary ports to the network to minimize the attack surface.

## [Using Docker Compose](#using-docker-compose)[](#using-docker-compose)

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and running multi-container Docker applications. It allows you to define the services that make up your application and how they interact with each other. Here are some benefits of using Docker Compose:

*   __Simplified application deployment__: Docker Compose simplifies the process of deploying multi-container applications.
*   __Easy service management__: Docker Compose allows you to easily start, stop, and scale your services.
*   __Version control__: Docker Compose files can be version controlled, making it easy to track changes to your application’s configuration.

## [Removing Docker Packages](#removing-docker-packages)[](#removing-docker-packages)

[Removing Docker packages](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine) is an essential part of maintaining your system and ensuring that you have the latest versions of Docker installed. Here are some steps to follow:

*   __List all installed Docker packages__: Use the command `dpkg -l | grep docker` to list all installed Docker packages.
*   __Remove the Docker package__: Use the command `sudo apt remove docker-ce` to remove the Docker package.
*   __Remove Docker dependencies__: Use the command `sudo apt autoremove` to remove any dependencies that are no longer needed.
*   __Update your package list__: Use the command `sudo apt update` to update your package list after removing Docker packages.

Images, containers, volumes, or custom configuration files on your host aren’t automatically removed. To delete all images, containers, and volumes:

```
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

Remove source list and keyrings:

```
sudo rm /etc/apt/sources.list.d/docker.list
sudo rm /etc/apt/keyrings/docker.asc
```

## [Common Errors and Debugging](#common-errors-and-debugging)[](#common-errors-and-debugging)

### [Docker Daemon Not Starting](#docker-daemon-not-starting)[](#docker-daemon-not-starting)

If the [Docker daemon](https://docs.docker.com/engine/reference/commandline/dockerd/) fails to start, it can be due to various reasons such as configuration issues, conflicts with other services, or system resource constraints. To troubleshoot this issue, you may observe error messages like:

```
OutputFailed to start Docker Application Container Engine.
```

or

```
Outputdocker.service: Main process exited, code=exited, status=1/FAILURE
```

To resolve this issue:

1.  Check the Docker service status: `sudo systemctl status docker`
2.  Review the Docker logs for errors: `sudo journalctl -u docker`
3.  Ensure the Docker service is enabled to start on boot: `sudo systemctl enable docker`
4.  Restart the Docker service: `sudo systemctl restart docker`

### [Permission Errors When Running Docker Commands](#permission-errors-when-running-docker-commands)[](#permission-errors-when-running-docker-commands)

[Permission errors](https://docs.docker.com/engine/install/linux-postinstall/) occur when the user running Docker commands does not have sufficient privileges. To troubleshoot this issue, you may observe error messages like:

```
Outputdocker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.
See 'docker run --help'.
```

To resolve this issue:

1.  Ensure the user is part of the `docker` group: `sudo usermod -aG docker ${USER}`
2.  Log out and log back in to apply the group membership changes
3.  Alternatively, use `sudo` before running Docker commands: `sudo docker `

By following these steps, you should be able to resolve common errors related to the Docker daemon not starting and permission errors when running Docker commands.

## [FAQs](#faqs)[](#faqs)

### [How do I install Docker on Ubuntu 22.04?](#how-do-i-install-docker-on-ubuntu-22-04)[](#how-do-i-install-docker-on-ubuntu-22-04)

To [install Docker on Ubuntu](https://docs.docker.com/engine/install/ubuntu/), follow these steps:

1.  Update your package list: `sudo apt update`
2.  Install the necessary packages: `sudo apt install apt-transport-https ca-certificates curl software-properties-common`
3.  Add the Docker GPG key: `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`
4.  Add the Docker repository: `echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
5.  Update your package list again: `sudo apt update`
6.  Install Docker: `sudo apt install docker-ce`

### [How do I verify that Docker is installed on Ubuntu?](#how-do-i-verify-that-docker-is-installed-on-ubuntu)[](#how-do-i-verify-that-docker-is-installed-on-ubuntu)

To verify that Docker is installed on Ubuntu, run the following command: `sudo systemctl status docker`

This command will show you the status of the Docker service. If Docker is installed and running, you should see an output indicating that the service is active and running. Here’s an example of what you might see:

```
Output● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2025-04-08 21:30:25 UTC; 22s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 7854 (dockerd)
      Tasks: 7
     Memory: 38.3M
        CPU: 340ms
     CGroup: /system.slice/docker.service
             └─7854 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

### [How do I run Docker without `sudo`?](#how-do-i-run-docker-without-sudo)[](#how-do-i-run-docker-without-sudo)

To run Docker without using `sudo`, you need to add your user to the `docker` group. Here’s how:

1.  Add your user to the `docker` group: `sudo usermod -aG docker ${USER}`
2.  Log out and log back in to apply the changes

After adding your user to the `docker` group, you should be able to run Docker commands without using `sudo`.

### [How do I uninstall Docker from Ubuntu?](#how-do-i-uninstall-docker-from-ubuntu)[](#how-do-i-uninstall-docker-from-ubuntu)

To [uninstall Docker from Ubuntu](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine), follow these steps:

1.  Stop the Docker service: `sudo systemctl stop docker`
2.  Remove Docker packages: `sudo apt purge docker-ce`
3.  Remove Docker dependencies: `sudo apt autoremove`
4.  Remove the Docker repository: `sudo rm /etc/apt/sources.list.d/docker.list`

## [Conclusion](#conclusion)[](#conclusion)

In this tutorial, you installed Docker, worked with images and containers, and pushed a modified image to Docker Hub. Now that you know the basics, explore the [other Docker tutorials](/community/tags/docker?type=tutorials) in the [DigitalOcean Community](/community). For more advanced Docker configurations, consider the following tutorials:

*   [Setting up a private Docker registry](/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-22-04)
*   [Running Nginx in a Docker container](/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-22-04)
*   [Using Ansible to install and set up Docker](/community/tutorials/how-to-use-ansible-to-install-and-set-up-docker-on-ubuntu-22-04)
*   [Installing a LAMP stack on Ubuntu](/community/tutorials/how-to-install-lamp-stack-on-ubuntu)

These tutorials will help you further expand your Docker knowledge and explore different use cases.

Thanks for learning with the DigitalOcean Community. Check out our offerings for compute, storage, networking, and managed databases.

[Learn more about our products](/products "Learn more about our products")

### Tutorial Series: Getting Started With Cloud Computing

This curriculum introduces open-source cloud computing to a general audience along with the skills necessary to deploy applications and websites securely to the cloud.

[DigitalOcean App Platform](/community/tags/digitalocean-app-platform)

[Ubuntu 22.04](/community/tags/ubuntu-22-04)

[Docker](/community/tags/docker)

[Ubuntu](/community/tags/ubuntu)

[Visit series page](/community/tutorial-series/undefined)

Browse Series: 39 tutorials

*   1/39 - [Cloud Servers: An Introduction](/community/conceptual-articles/cloud-servers-an-introduction)
*   2/39 - [A General Introduction to Cloud Computing](/community/tutorials/a-general-introduction-to-cloud-computing)
*   3/39 - [Initial Server Setup with Ubuntu](/community/tutorials/initial-server-setup-with-ubuntu)

Expand to view all

### About the author(s)

![Brian Hogan](https://www.gravatar.com/avatar/b6b8c7095e343da2efaf8a5a1820affcb9feed56f0bb53ac6095862d9a60a40b?default=retro&size=256)

Brian Hogan

Author

[See author profile](/community/users/bhogan)

Managed the Write for DOnations program, wrote and edited community articles, and makes things on the Internet. Expertise in DevOps areas including Linux, Ubuntu, Debian, and more.

[See author profile](/community/users/bhogan)

![Tony Tran](https://www.gravatar.com/avatar/9e398be78819dace9747161327c2638a6e1ec881e9bf4ed30df4d77133b0dc14?default=retro&size=256)

Tony Tran

Author

[See author profile](/community/users/tonytran)

[See author profile](/community/users/tonytran)

![Anish Singh Walia](https://www.gravatar.com/avatar/c91039d94d0ab6e82a10aaf08e3c1c341d5744c8533ff6d077ee4a765246d8d3?default=retro&size=256)

Anish Singh Walia

Editor

Sr Technical Writer

[See author profile](/community/users/asinghwalia)

I help Businesses scale with AI x SEO x (authentic) Content that revives traffic and keeps leads flowing | 3,000,000+ Average monthly readers on Medium | Sr Technical Writer @ DigitalOcean | Ex-Cloud Consultant @ AMEX | Ex-Site Reliability Engineer(DevOps)@Nutanix

[See author profile](/community/users/asinghwalia)

Category:

[Tutorial](/community/tutorials?subtype=tutorial)

Tags:

[DigitalOcean App Platform](/community/tags/digitalocean-app-platform)

[Ubuntu 22.04](/community/tags/ubuntu-22-04)

[Docker](/community/tags/docker)

[Ubuntu](/community/tags/ubuntu)

[](https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-install-and-use-docker-on-ubuntu-22-04%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-install-and-use-docker-on-ubuntu-22-04&text=&via=digitalocean "Share to X (Twitter)")[](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-install-and-use-docker-on-ubuntu-22-04%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-install-and-use-docker-on-ubuntu-22-04&t= "Share to Facebook")[](https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-install-and-use-docker-on-ubuntu-22-04%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-install-and-use-docker-on-ubuntu-22-04&title= "Share to LinkedIn")[](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-install-and-use-docker-on-ubuntu-22-04%3Futm_medium%3Dcommunity%26utm_source%3Dtwshare%26utm_content%3Dhow-to-install-and-use-docker-on-ubuntu-22-04&t= "Share to YCombinator")

#### Still looking for an answer?

[Ask a question](/community/questions)[Search for more help](/community)

Was this helpful?

YesNo

Comments(10)Follow-up questions(0)

[](/community/markdown "Help")

﻿

This textbox defaults to using Markdown to format your answer.

You can type !ref in this text area to quickly search our full set of tutorials, documentation & marketplace offerings and insert the link!

[Sign in/up to comment](https://www.digitalocean.com/api/dynamic-content/v1/login?success_redirect=https%3A%2F%2Fwww.digitalocean.com&error_redirect=https%3A%2F%2Fwww.digitalocean.com%2Fauth-error&type=register)

![sarmadjari](https://www.gravatar.com/avatar/79e645602c64463dcbe80222f4d514b9813679952d009007089b14565e8cf1b6?default=retro)

[sarmadjari](/community/users/sarmadjari)

[May 2, 2022](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=172641)

Show less

Thank you so much

but I see some differences from the steps on [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)

can you explain why?

Reply

![Hitesh D](https://www.gravatar.com/avatar/b06f5343d3d6720b855f22247e868a975d396dd072785f5d4a6e4ebc5f5f8ccd?default=retro)

[Hitesh D](/community/users/hiteshdfish)

[July 2, 2022](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=174399)

Show less

Appreciate your patience and support for us and thanks to the entire team who is helping thousands and lakhs of readers with the best articles/blogs on DEVOPS, AWS Architect and all such tools. Here in this current article there is a mistake observed without executing container how come root changes with the container id, pls observe and update. THe command docker exec itself didnt run here but you mentioned

Your command prompt should change to reflect the fact that you’re now working inside the container and should take this form:

Output root[@d9b100f2f636](/community/users/d9b100f2f636):/#

Reply

![efa0930bb3fbf4bdf1950d569d44d0](https://www.gravatar.com/avatar/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855?default=retro)

[efa0930bb3fbf4bdf1950d569d44d0](/community/users/efa0930bb3fbf4bdf1950d569d44d0)

[August 30, 2022](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=188863)

Show less

Thanks for this great tutorial! So basically you can jump in and use an environment created by someone. How would you ensure that the environment you use is secured? For example for a PHP webapp using LAMP stack, you would depend on linux, apache, php and mysql. How would you know all these components installed are not compromised? In the old days, I used to compiled everything from source and that would take the whole day!

Reply

![f1fa9096f1cb4089a63388670e](https://www.gravatar.com/avatar/9b228c2e11b96350d4703ebac4935381a99a71d877b1847f67562ad8daf5ed40?default=retro)

[f1fa9096f1cb4089a63388670e](/community/users/f1fa9096f1cb4089a63388670e)

[September 3, 2022](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=188976)

Show less

I am unable to start the docker when I use command `sudo service docker start` it outputs starting docker but when I use `sudo service docker status` it shows docker not running. I am using wls2 Ubuntu 22.04 lts. or when I use `sudo docker run hello-world` I get output as `docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?. See 'docker run --help'.` I have tried solutions at other forums but doesn’t work.

Reply

![Adolfo Hoyos](https://www.gravatar.com/avatar/d51d5e435abcf59c340390b8c3c9950ee11e9497f4fc74cafe54b9865d778b79?default=retro)

[Adolfo Hoyos](/community/users/fitohoyos)

[October 24, 2022](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=190576)

Show less

For those having problems getting the docker service to run:

[https://stackoverflow.com/questions/74186195/docker-service-wont-start-on-ubuntu-22-04-on-wsl2/74186196#74186196](https://stackoverflow.com/questions/74186195/docker-service-wont-start-on-ubuntu-22-04-on-wsl2/74186196#74186196)

Reply

![Jimmy Olano](https://www.gravatar.com/avatar/eb6b00270a9d0921c12dc9a0f3432bf9b0df127aa22dee26b9900c02336c7783?default=retro)

[Jimmy Olano](/community/users/jimmyolano)

[November 16, 2022](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=191298)

Show less

__¡Hi!__ At `Step 6`, help for Docker is `docker run --help` (double dash). Thanks for this tutorial, ¡very great! 👍🏽

Reply

![Pierre](https://www.gravatar.com/avatar/fbb0d11af19a6a24afbf66946361fe811e53ef7f374c82237359a3d294336e51?default=retro)

[Pierre](/community/users/pierrecoral)

[February 8, 2023](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=193602)

Show less

I could not run the install part to the end, kept bumping into this error when running ‘sudo apt update’

W: GPG error: [https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu) jammy InRelease: The following signatures couldn’t be verified because the public key is not available: NO\_PUBKEY 7EA0A9C3F273FCD8 E: The repository ‘[https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu) jammy InRelease’ is not signed.

I had to install Docker following the official instructions … any idea why this fails ?

Reply

![john](https://www.gravatar.com/avatar/f0c62c5e739ff707b3422dd9211b257932976d9737a8c93fa35efcde663b0abb?default=retro)

[john](/community/users/johnf0fcc3fa9fcb483f9673522d51)

[April 23, 2023](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=195902)

Show less

I love this tutorial SO MUCH. AND i love Digital Ocean so much !!! The quality of tutorials is always the best. Thank you!!

Reply

![Stanislav Ignatov](https://www.gravatar.com/avatar/f0b53b15a9a7acd6b2a109613670630cf071397b33d98c602de023b0080641a0?default=retro)

[Stanislav Ignatov](/community/users/stanislavignatov)

[August 19, 2023](/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04?comment=198650)

Show less

if you use

```
sudo usermod -aG docker ${USER}
```

and want use docker from you default user, bit not loging to root, you need use this command:

```
sudo chmod 666 /var/run/docker.sock
```
