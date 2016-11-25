package au.com.aiaa.evolve.service.logging;

import java.io.ByteArrayOutputStream;
import java.util.Set;

import javax.xml.soap.SOAPMessage;
import javax.xml.ws.handler.MessageContext;
import javax.xml.ws.handler.soap.SOAPHandler;
import javax.xml.ws.handler.soap.SOAPMessageContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * This class is for logging of Request, Response and fault for SOAP services
 */
public class LoggingHandler implements SOAPHandler<SOAPMessageContext> {

	
	Logger LOGGER = LoggerFactory.getLogger(LoggingHandler.class);

	public boolean handleMessage (SOAPMessageContext c) {
	   SOAPMessage msg = c.getMessage();

	   ByteArrayOutputStream out = new ByteArrayOutputStream();
	  
	   
	   boolean request = ((Boolean) c.get(SOAPMessageContext.MESSAGE_OUTBOUND_PROPERTY)).booleanValue();

	   try {
	      if (request) { // This is a request message.
	         // Write the message to the output stream 
	    	  msg.writeTo(out);
	   	   	  String strMsg = new String(out.toByteArray());
	   	   	  LOGGER.info("LoggingHandler.handleMessage() : Request sent is : " + strMsg);
	    	  System.out.println(strMsg);
	      }
	      else { // This is the response message 
	    	  msg.writeTo(out);
	   	   	  String strMsg = new String(out.toByteArray());
	   	   LOGGER.info("LoggingHandler.handleMessage() : Response received is : " + strMsg);
	      }
	   }
	   catch (Exception e) {  }
	   return true;
	}

	public boolean handleFault (SOAPMessageContext c) {
	   SOAPMessage msg = c.getMessage();
	   ByteArrayOutputStream out = new ByteArrayOutputStream();

	   try {
	    	  msg.writeTo(out);
	   	   	  String strMsg = new String(out.toByteArray());
	   	   	  LOGGER.info("LoggingHandler.handleFault() : Fault Response received is : " + strMsg);
	   }
	   catch (Exception e) {}
	   return true;
	}

	public void close (MessageContext c) {
	  
	}

	public Set getHeaders() {
	   // Not required for logging
	   return null;
	}
	}
