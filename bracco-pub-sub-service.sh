#!/bin/bash
#
# bracco_pub_sub          Start/Stop any shell script
#
# chkconfig: 345 95 65
# description: bracco_pub_sub
# processname: bracco_pub_subd
#

# ENVIRONMENT
# Edit these for your configuration

# Name for the service, used in logging
NAME=bracco_pub_sub

# Name of the user to be used to execute the service
SCRIPT_USER=vagrant # pi for raspberry

# Example of how to pass paramters into the command
PARAM2=whatever

# In which directory is the shell script that this service will execute
BRACCO_PUB_SUB_SCRIPT_DIR=/opt/bracco_pub_sub

# Construct the command the will cd into the right directory, and invoke the script
#BRACCO_PUB_SUB_COMMAND="cd $BRACCO_PUB_SUB_SCRIPT_DIR && ./bracco_pub_sub 'param1' $PARAM2"
BRACCO_PUB_SUB_COMMAND="cd $BRACCO_PUB_SUB_SCRIPT_DIR && ./bin/bracco_pub_sub"

# How can the script be identified if it appears in a 'ps' command via grep?
#  Examples to use are 'java', 'python' etc.
BRACCO_PUB_SUB_PROCESS_TYPE=elixir

# Where to write the log file?
BRACCO_PUB_SUB_SVC_LOG_FILE=$BRACCO_PUB_SUB_SCRIPT_DIR/bracco_pub_sub.log

# Where to write the process identifier - this is used to track if the service is already running
# Note: the script noted in the COMMAND must actually write this file
PID_FILE=$BRACCO_PUB_SUB_SCRIPT_DIR/bracco_pub_sub_server.pid

# Load system specific optional arguments
# Create and populate this file with machine specific settings
if [ -f /etc/sysconfig/bracco_pub_subd ]; then
    . /etc/sysconfig/bracco_pub_subd
fi

# Is the service already running? If so, capture the process id
if [ -f $PID_FILE ]; then
    PID=`cat $PID_FILE`
else
    PID=""
fi

# SERVICE ENTRY POINTS (START/STOP)

# Start Command
start() {
    if [ "${PID}" != "" ]; then
        # Check to see if the /proc dir for this process exists
        if [ -a /proc/${PID} ]; then
            # check to make sure this is likely the running service
            ps aux | grep ${PID} | grep $BRACCO_PUB_SUB_PROCESS_TYPE >> /dev/null
            # If it is a process of the right type assume that it is bracco_pub_sub and just exit
            # otherwise remove the subsys lock file and start bracco_pub_sub
            if [ "$?" = "0" ]; then
                exit 1
            else
                echo "bracco_pub_sub lock file still exists, removing..."
                rm /var/lock/bracco_pub_subd
            fi
        else
            # The process running as pid $PID is not a process of the right type, remove subsys
            # lock and start bracco_pub_sub
            echo "bracco_pub_sub lock file still exists, removing..."
            rm /var/lock/bracco_pub_subd
        fi
    fi
    echo -n "Starting bracco_pub_sub: "
    su - $SCRIPT_USER -c "/bin/sh -c \"$BRACCO_PUB_SUB_COMMAND start > $BRACCO_PUB_SUB_SVC_LOG_FILE 2>&1\"" & RETVAL=$?
    sleep 3
    touch /var/lock/bracco_pub_subd
    exit 0
}

stop() {

    echo -n $"Stopping bracco_pub_sub: "
    if [ "${PID}" != "" ]; then
        echo -n "killing " $PID
        kill ${PID}
        for i in {1..30}
        do
            if [ -n "`ps aux | grep $BRACCO_PUB_SUB_PROCESS_TYPE | grep bracco_pub_sub `" ]; then
                sleep 1 # Still running, wait a second.
                echo -n .
            else
                # stopped
                rm -f /var/lock/bracco_pub_subd
                rm -f $PID_FILE
                echo
                exit 0
            fi
        done
    else
        echo "$NAME is not running"
        exit 1
    fi
    echo "Failed to stop in 30 seconds."
    kill -QUIT ${PID} # Request a thread dump so we can diagnose a hung shutdown
    exit 1
}

case "$1" in
  start)
      start
    ;;
  stop)
      stop
    ;;
  *)
    echo $"Usage: $0 {start|stop}"
    exit 1
esac
