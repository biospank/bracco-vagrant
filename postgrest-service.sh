#!/bin/bash
#
# postgrest          Start/Stop any shell script
#
# chkconfig: 345 95 65
# description: postgrest
# processname: postgrest
#

# ENVIRONMENT
# Edit these for your configuration

# Name for the service, used in logging
NAME=postgrest

# Name of the user to be used to execute the service
SCRIPT_USER=vagrant # pi for raspberry

# Example of how to pass paramters into the command
PARAM2=whatever

# In which directory is the shell script that this service will execute
POSTGREST_SCRIPT_DIR=/home/vagrant

# Construct the command the will cd into the right directory, and invoke the script
#POSTGREST_COMMAND="cd $POSTGREST_SCRIPT_DIR && ./http_server.sh 'param1' $PARAM2"
POSTGREST_COMMAND="postgrest '/home/vagrant/bracco.conf'"

# How can the script be identified if it appears in a 'ps' command via grep?
#  Examples to use are 'java', 'python' etc.
POSTGREST_PROCESS_TYPE=haskell

# Where to write the log file?
POSTGREST_SVC_LOG_FILE=$POSTGREST_SCRIPT_DIR/postgrest.log

# Where to write the process identifier - this is used to track if the service is already running
# Note: the script noted in the COMMAND must actually write this file
PID_FILE=$POSTGREST_SCRIPT_DIR/postgrest_server.pid

# Load system specific optional arguments
# Create and populate this file with machine specific settings
if [ -f /etc/sysconfig/postgrestd ]; then
    . /etc/sysconfig/postgrestd
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
            ps aux | grep ${PID} | grep $POSTGREST_PROCESS_TYPE >> /dev/null
            # If it is a process of the right type assume that it is postgrest and just exit
            # otherwise remove the subsys lock file and start postgrest
            if [ "$?" = "0" ]; then
                exit 1
            else
                echo "postgrest lock file still exists, removing..."
                rm /var/lock/postgrestd
            fi
        else
            # The process running as pid $PID is not a process of the right type, remove subsys
            # lock and start postgrest
            echo "postgrest lock file still exists, removing..."
            rm /var/lock/postgrestd
        fi
    fi
    echo -n "Starting postgrest: "
    su - $SCRIPT_USER -c "/bin/sh -c \"$POSTGREST_COMMAND > $POSTGREST_SVC_LOG_FILE 2>&1\"" & RETVAL=$?
    sleep 3
    touch /var/lock/postgrestd
    exit 0
}

stop() {

    echo -n $"Stopping postgrest: "
    if [ "${PID}" != "" ]; then
        echo -n "killing " $PID
        kill ${PID}
        for i in {1..30}
        do
            if [ -n "`ps aux | grep $POSTGREST_PROCESS_TYPE | grep postgrest `" ]; then
                sleep 1 # Still running, wait a second.
                echo -n .
            else
                # stopped
                rm -f /var/lock/postgrestd
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
