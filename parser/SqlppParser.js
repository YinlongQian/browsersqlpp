// Generated from Sqlpp.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SqlppVisitor = require('./SqlppVisitor').SqlppVisitor;

var grammarFileName = "Sqlpp.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00033\u00ff\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0005\u0002\u001d\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\"\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "1\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "7\n\u0004\u0007\u00049\n\u0004\f\u0004\u000e\u0004<\u000b\u0004\u0005",
    "\u0004>\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006I",
    "\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006_\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006e\n\u0006\u0005\u0006",
    "g\n\u0006\u0003\u0006\u0005\u0006j\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006s",
    "\n\u0006\u0003\u0006\u0005\u0006v\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u0083\n\u0006\f\u0006\u000e",
    "\u0006\u0086\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b\u0098\n\b\u0003\b\u0003\b\u0007\b",
    "\u009c\n\b\f\b\u000e\b\u009f\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0005\b\u00a8\n\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0007\b\u00af\n\b\f\b\u000e\b\u00b2\u000b\b\u0003\b\u0003",
    "\b\u0003\b\u0005\b\u00b7\n\b\u0003\b\u0003\b\u0007\b\u00bb\n\b\f\b\u000e",
    "\b\u00be\u000b\b\u0003\b\u0003\b\u0003\b\u0005\b\u00c3\n\b\u0003\b\u0003",
    "\b\u0007\b\u00c7\n\b\f\b\u000e\b\u00ca\u000b\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u00d1\n\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u00f0",
    "\n\b\f\b\u000e\b\u00f3\u000b\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0002\u0004",
    "\n\u000e\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u0002\n\u0004\u0002##\'\'\u0003\u0002#&\u0003\u0002\r\u000f\u0003",
    "\u0002\u0010\u0011\u0003\u0002\u0012\u0015\u0003\u0002\u0016\u0019\u0005",
    "\u0002\u0010\u0011\u001c\u001c--\u0003\u000201\u0002\u011e\u0002\u001c",
    "\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u0006=",
    "\u0003\u0002\u0002\u0002\b?\u0003\u0002\u0002\u0002\n^\u0003\u0002\u0002",
    "\u0002\f\u0087\u0003\u0002\u0002\u0002\u000e\u00d0\u0003\u0002\u0002",
    "\u0002\u0010\u00f4\u0003\u0002\u0002\u0002\u0012\u00f6\u0003\u0002\u0002",
    "\u0002\u0014\u00f8\u0003\u0002\u0002\u0002\u0016\u00fa\u0003\u0002\u0002",
    "\u0002\u0018\u00fc\u0003\u0002\u0002\u0002\u001a\u001d\u0005\u000e\b",
    "\u0002\u001b\u001d\u0005\u0004\u0003\u0002\u001c\u001a\u0003\u0002\u0002",
    "\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d\u0003\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0005\u0006\u0004\u0002\u001f!\u0005\b\u0005\u0002",
    " \"\u0005\f\u0007\u0002! \u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002",
    "\u0002\"\u0005\u0003\u0002\u0002\u0002#$\u0007\u001d\u0002\u0002$%\u0007",
    "\u001e\u0002\u0002%>\u0005\u000e\b\u0002&\'\u0007\u001d\u0002\u0002",
    "\'(\u0007\u001f\u0002\u0002()\u0005\u000e\b\u0002)*\u0007\u0003\u0002",
    "\u0002*+\u0005\u000e\b\u0002+>\u0003\u0002\u0002\u0002,-\u0007\u001d",
    "\u0002\u0002-0\u0005\u000e\b\u0002./\u0007!\u0002\u0002/1\u0005\u0018",
    "\r\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u00021:\u0003",
    "\u0002\u0002\u000223\u0007\u0004\u0002\u000236\u0005\u000e\b\u00024",
    "5\u0007!\u0002\u000257\u0005\u0018\r\u000264\u0003\u0002\u0002\u0002",
    "67\u0003\u0002\u0002\u000279\u0003\u0002\u0002\u000282\u0003\u0002\u0002",
    "\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002",
    "\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=#\u0003",
    "\u0002\u0002\u0002=&\u0003\u0002\u0002\u0002=,\u0003\u0002\u0002\u0002",
    ">\u0007\u0003\u0002\u0002\u0002?@\u0007 \u0002\u0002@A\u0005\n\u0006",
    "\u0002A\t\u0003\u0002\u0002\u0002BC\b\u0006\u0001\u0002CD\u0005\u000e",
    "\b\u0002DE\u0007!\u0002\u0002EH\u0005\u0014\u000b\u0002FG\u0007\"\u0002",
    "\u0002GI\u0005\u0014\u000b\u0002HF\u0003\u0002\u0002\u0002HI\u0003\u0002",
    "\u0002\u0002I_\u0003\u0002\u0002\u0002JK\u0005\u000e\b\u0002KL\u0007",
    "!\u0002\u0002LM\u0007\u0005\u0002\u0002MN\u0005\u0014\u000b\u0002NO",
    "\u0007\u0003\u0002\u0002OP\u0005\u0014\u000b\u0002PQ\u0007\u0006\u0002",
    "\u0002Q_\u0003\u0002\u0002\u0002RS\t\u0002\u0002\u0002ST\u0007+\u0002",
    "\u0002TU\u0007\u0007\u0002\u0002UV\u0005\u000e\b\u0002VW\u0007!\u0002",
    "\u0002WX\u0005\u0014\u000b\u0002XY\u0007\u0004\u0002\u0002YZ\u0005\u000e",
    "\b\u0002Z[\u0007!\u0002\u0002[\\\u0005\u0014\u000b\u0002\\]\u0007\b",
    "\u0002\u0002]_\u0003\u0002\u0002\u0002^B\u0003\u0002\u0002\u0002^J\u0003",
    "\u0002\u0002\u0002^R\u0003\u0002\u0002\u0002_\u0084\u0003\u0002\u0002",
    "\u0002`f\f\u0007\u0002\u0002ag\u0007#\u0002\u0002bd\u0007$\u0002\u0002",
    "ce\u0007\'\u0002\u0002dc\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002eg\u0003\u0002\u0002\u0002fa\u0003\u0002\u0002\u0002fb\u0003\u0002",
    "\u0002\u0002gi\u0003\u0002\u0002\u0002hj\u0007)\u0002\u0002ih\u0003",
    "\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002",
    "k\u0083\u0005\n\u0006\blm\f\u0005\u0002\u0002mn\u0007\u0004\u0002\u0002",
    "n\u0083\u0005\n\u0006\u0006op\f\u0006\u0002\u0002pr\u0007&\u0002\u0002",
    "qs\u0007\'\u0002\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002",
    "\u0002su\u0003\u0002\u0002\u0002tv\u0007)\u0002\u0002ut\u0003\u0002",
    "\u0002\u0002uv\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0005",
    "\n\u0006\u0002xy\u0007*\u0002\u0002yz\u0005\u000e\b\u0002z\u0083\u0003",
    "\u0002\u0002\u0002{|\f\u0004\u0002\u0002|}\t\u0003\u0002\u0002}~\u0007",
    "(\u0002\u0002~\u007f\u0005\n\u0006\u0002\u007f\u0080\u0007*\u0002\u0002",
    "\u0080\u0081\u0005\u000e\b\u0002\u0081\u0083\u0003\u0002\u0002\u0002",
    "\u0082`\u0003\u0002\u0002\u0002\u0082l\u0003\u0002\u0002\u0002\u0082",
    "o\u0003\u0002\u0002\u0002\u0082{\u0003\u0002\u0002\u0002\u0083\u0086",
    "\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085",
    "\u0003\u0002\u0002\u0002\u0085\u000b\u0003\u0002\u0002\u0002\u0086\u0084",
    "\u0003\u0002\u0002\u0002\u0087\u0088\u0007,\u0002\u0002\u0088\u0089",
    "\u0005\u000e\b\u0002\u0089\r\u0003\u0002\u0002\u0002\u008a\u008b\b\b",
    "\u0001\u0002\u008b\u008c\u0007\u0007\u0002\u0002\u008c\u008d\u0005\u0004",
    "\u0003\u0002\u008d\u008e\u0007\b\u0002\u0002\u008e\u00d1\u0003\u0002",
    "\u0002\u0002\u008f\u00d1\u0005\u0012\n\u0002\u0090\u00d1\u0005\u0014",
    "\u000b\u0002\u0091\u0092\u0005\u0010\t\u0002\u0092\u0093\u0005\u000e",
    "\b\u000f\u0093\u00d1\u0003\u0002\u0002\u0002\u0094\u0095\u0005\u0016",
    "\f\u0002\u0095\u0097\u0007\u0007\u0002\u0002\u0096\u0098\u0005\u000e",
    "\b\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002",
    "\u0002\u0002\u0098\u009d\u0003\u0002\u0002\u0002\u0099\u009a\u0007\u0004",
    "\u0002\u0002\u009a\u009c\u0005\u000e\b\u0002\u009b\u0099\u0003\u0002",
    "\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003\u0002",
    "\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0003\u0002",
    "\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007\b",
    "\u0002\u0002\u00a1\u00d1\u0003\u0002\u0002\u0002\u00a2\u00a7\u0007\u0005",
    "\u0002\u0002\u00a3\u00a4\u0005\u0018\r\u0002\u00a4\u00a5\u0007\u0003",
    "\u0002\u0002\u00a5\u00a6\u0005\u000e\b\u0002\u00a6\u00a8\u0003\u0002",
    "\u0002\u0002\u00a7\u00a3\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002",
    "\u0002\u0002\u00a8\u00b0\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007\u0004",
    "\u0002\u0002\u00aa\u00ab\u0005\u0018\r\u0002\u00ab\u00ac\u0007\u0003",
    "\u0002\u0002\u00ac\u00ad\u0005\u000e\b\u0002\u00ad\u00af\u0003\u0002",
    "\u0002\u0002\u00ae\u00a9\u0003\u0002\u0002\u0002\u00af\u00b2\u0003\u0002",
    "\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002",
    "\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002",
    "\u0002\u0002\u00b3\u00d1\u0007\u0006\u0002\u0002\u00b4\u00b6\u0007\n",
    "\u0002\u0002\u00b5\u00b7\u0005\u000e\b\u0002\u00b6\u00b5\u0003\u0002",
    "\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00bc\u0003\u0002",
    "\u0002\u0002\u00b8\u00b9\u0007\u0004\u0002\u0002\u00b9\u00bb\u0005\u000e",
    "\b\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00be\u0003\u0002",
    "\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002",
    "\u0002\u0002\u00bd\u00bf\u0003\u0002\u0002\u0002\u00be\u00bc\u0003\u0002",
    "\u0002\u0002\u00bf\u00d1\u0007\u000b\u0002\u0002\u00c0\u00c2\u0007\u001a",
    "\u0002\u0002\u00c1\u00c3\u0005\u000e\b\u0002\u00c2\u00c1\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c8\u0003\u0002",
    "\u0002\u0002\u00c4\u00c5\u0007\u0004\u0002\u0002\u00c5\u00c7\u0005\u000e",
    "\b\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c7\u00ca\u0003\u0002",
    "\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002",
    "\u0002\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002",
    "\u0002\u0002\u00cb\u00d1\u0007\u001b\u0002\u0002\u00cc\u00cd\u0007\u0007",
    "\u0002\u0002\u00cd\u00ce\u0005\u000e\b\u0002\u00ce\u00cf\u0007\b\u0002",
    "\u0002\u00cf\u00d1\u0003\u0002\u0002\u0002\u00d0\u008a\u0003\u0002\u0002",
    "\u0002\u00d0\u008f\u0003\u0002\u0002\u0002\u00d0\u0090\u0003\u0002\u0002",
    "\u0002\u00d0\u0091\u0003\u0002\u0002\u0002\u00d0\u0094\u0003\u0002\u0002",
    "\u0002\u00d0\u00a2\u0003\u0002\u0002\u0002\u00d0\u00b4\u0003\u0002\u0002",
    "\u0002\u00d0\u00c0\u0003\u0002\u0002\u0002\u00d0\u00cc\u0003\u0002\u0002",
    "\u0002\u00d1\u00f1\u0003\u0002\u0002\u0002\u00d2\u00d3\f\u000e\u0002",
    "\u0002\u00d3\u00d4\u0007\f\u0002\u0002\u00d4\u00f0\u0005\u000e\b\u000f",
    "\u00d5\u00d6\f\r\u0002\u0002\u00d6\u00d7\t\u0004\u0002\u0002\u00d7\u00f0",
    "\u0005\u000e\b\u000e\u00d8\u00d9\f\f\u0002\u0002\u00d9\u00da\t\u0005",
    "\u0002\u0002\u00da\u00f0\u0005\u000e\b\r\u00db\u00dc\f\u000b\u0002\u0002",
    "\u00dc\u00dd\t\u0006\u0002\u0002\u00dd\u00f0\u0005\u000e\b\f\u00de\u00df",
    "\f\n\u0002\u0002\u00df\u00e0\t\u0007\u0002\u0002\u00e0\u00f0\u0005\u000e",
    "\b\u000b\u00e1\u00e2\f\t\u0002\u0002\u00e2\u00e3\u0007.\u0002\u0002",
    "\u00e3\u00f0\u0005\u000e\b\n\u00e4\u00e5\f\b\u0002\u0002\u00e5\u00e6",
    "\u0007/\u0002\u0002\u00e6\u00f0\u0005\u000e\b\t\u00e7\u00e8\f\u0011",
    "\u0002\u0002\u00e8\u00e9\u0007\t\u0002\u0002\u00e9\u00f0\u0005\u0018",
    "\r\u0002\u00ea\u00eb\f\u0010\u0002\u0002\u00eb\u00ec\u0007\n\u0002\u0002",
    "\u00ec\u00ed\u0005\u000e\b\u0002\u00ed\u00ee\u0007\u000b\u0002\u0002",
    "\u00ee\u00f0\u0003\u0002\u0002\u0002\u00ef\u00d2\u0003\u0002\u0002\u0002",
    "\u00ef\u00d5\u0003\u0002\u0002\u0002\u00ef\u00d8\u0003\u0002\u0002\u0002",
    "\u00ef\u00db\u0003\u0002\u0002\u0002\u00ef\u00de\u0003\u0002\u0002\u0002",
    "\u00ef\u00e1\u0003\u0002\u0002\u0002\u00ef\u00e4\u0003\u0002\u0002\u0002",
    "\u00ef\u00e7\u0003\u0002\u0002\u0002\u00ef\u00ea\u0003\u0002\u0002\u0002",
    "\u00f0\u00f3\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002",
    "\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u000f\u0003\u0002\u0002\u0002",
    "\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f4\u00f5\t\b\u0002\u0002\u00f5",
    "\u0011\u0003\u0002\u0002\u0002\u00f6\u00f7\t\t\u0002\u0002\u00f7\u0013",
    "\u0003\u0002\u0002\u0002\u00f8\u00f9\u00072\u0002\u0002\u00f9\u0015",
    "\u0003\u0002\u0002\u0002\u00fa\u00fb\u00072\u0002\u0002\u00fb\u0017",
    "\u0003\u0002\u0002\u0002\u00fc\u00fd\u00072\u0002\u0002\u00fd\u0019",
    "\u0003\u0002\u0002\u0002\u001c\u001c!06:=H^dfiru\u0082\u0084\u0097\u009d",
    "\u00a7\u00b0\u00b6\u00bc\u00c2\u00c8\u00d0\u00ef\u00f1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "','", "'{'", "'}'", "'('", "')'", "'.'", 
                     "'['", "']'", "'||'", "'*'", "'/'", "'%'", "'+'", "'-'", 
                     "'<'", "'<='", "'>'", "'>='", "'='", "'=='", "'!='", 
                     "'<>'", "'{{'", "'}}'", "'~'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "K_SELECT", "K_ELEMENT", "K_ATTRIBUTE", "K_FROM", 
                      "K_AS", "K_AT", "K_INNER", "K_LEFT", "K_RIGHT", "K_FULL", 
                      "K_OUTER", "K_JOIN", "K_CORRELATE", "K_ON", "K_FLATTEN", 
                      "K_WHERE", "K_NOT", "K_AND", "K_OR", "STRLITERAL", 
                      "NUMBER", "VAR_NAME", "WS" ];

var ruleNames =  [ "query", "swf_query", "select_clause", "from_clause", 
                   "from_item", "where_clause", "expr", "unary_op", "value", 
                   "variable", "func_name", "attr_name" ];

function SqlppParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SqlppParser.prototype = Object.create(antlr4.Parser.prototype);
SqlppParser.prototype.constructor = SqlppParser;

Object.defineProperty(SqlppParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SqlppParser.EOF = antlr4.Token.EOF;
SqlppParser.T__0 = 1;
SqlppParser.T__1 = 2;
SqlppParser.T__2 = 3;
SqlppParser.T__3 = 4;
SqlppParser.T__4 = 5;
SqlppParser.T__5 = 6;
SqlppParser.T__6 = 7;
SqlppParser.T__7 = 8;
SqlppParser.T__8 = 9;
SqlppParser.T__9 = 10;
SqlppParser.T__10 = 11;
SqlppParser.T__11 = 12;
SqlppParser.T__12 = 13;
SqlppParser.T__13 = 14;
SqlppParser.T__14 = 15;
SqlppParser.T__15 = 16;
SqlppParser.T__16 = 17;
SqlppParser.T__17 = 18;
SqlppParser.T__18 = 19;
SqlppParser.T__19 = 20;
SqlppParser.T__20 = 21;
SqlppParser.T__21 = 22;
SqlppParser.T__22 = 23;
SqlppParser.T__23 = 24;
SqlppParser.T__24 = 25;
SqlppParser.T__25 = 26;
SqlppParser.K_SELECT = 27;
SqlppParser.K_ELEMENT = 28;
SqlppParser.K_ATTRIBUTE = 29;
SqlppParser.K_FROM = 30;
SqlppParser.K_AS = 31;
SqlppParser.K_AT = 32;
SqlppParser.K_INNER = 33;
SqlppParser.K_LEFT = 34;
SqlppParser.K_RIGHT = 35;
SqlppParser.K_FULL = 36;
SqlppParser.K_OUTER = 37;
SqlppParser.K_JOIN = 38;
SqlppParser.K_CORRELATE = 39;
SqlppParser.K_ON = 40;
SqlppParser.K_FLATTEN = 41;
SqlppParser.K_WHERE = 42;
SqlppParser.K_NOT = 43;
SqlppParser.K_AND = 44;
SqlppParser.K_OR = 45;
SqlppParser.STRLITERAL = 46;
SqlppParser.NUMBER = 47;
SqlppParser.VAR_NAME = 48;
SqlppParser.WS = 49;

SqlppParser.RULE_query = 0;
SqlppParser.RULE_swf_query = 1;
SqlppParser.RULE_select_clause = 2;
SqlppParser.RULE_from_clause = 3;
SqlppParser.RULE_from_item = 4;
SqlppParser.RULE_where_clause = 5;
SqlppParser.RULE_expr = 6;
SqlppParser.RULE_unary_op = 7;
SqlppParser.RULE_value = 8;
SqlppParser.RULE_variable = 9;
SqlppParser.RULE_func_name = 10;
SqlppParser.RULE_attr_name = 11;

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

QueryContext.prototype.swf_query = function() {
    return this.getTypedRuleContext(Swf_queryContext,0);
};

QueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.QueryContext = QueryContext;

SqlppParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SqlppParser.RULE_query);
    try {
        this.state = 26;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SqlppParser.T__2:
        case SqlppParser.T__4:
        case SqlppParser.T__7:
        case SqlppParser.T__13:
        case SqlppParser.T__14:
        case SqlppParser.T__23:
        case SqlppParser.T__25:
        case SqlppParser.K_NOT:
        case SqlppParser.STRLITERAL:
        case SqlppParser.NUMBER:
        case SqlppParser.VAR_NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.expr(0);
            break;
        case SqlppParser.K_SELECT:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.swf_query();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Swf_queryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_swf_query;
    return this;
}

Swf_queryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Swf_queryContext.prototype.constructor = Swf_queryContext;

Swf_queryContext.prototype.select_clause = function() {
    return this.getTypedRuleContext(Select_clauseContext,0);
};

Swf_queryContext.prototype.from_clause = function() {
    return this.getTypedRuleContext(From_clauseContext,0);
};

Swf_queryContext.prototype.where_clause = function() {
    return this.getTypedRuleContext(Where_clauseContext,0);
};

Swf_queryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitSwf_query(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.Swf_queryContext = Swf_queryContext;

SqlppParser.prototype.swf_query = function() {

    var localctx = new Swf_queryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SqlppParser.RULE_swf_query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.select_clause();
        this.state = 29;
        this.from_clause();
        this.state = 31;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SqlppParser.K_WHERE) {
            this.state = 30;
            this.where_clause();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Select_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_select_clause;
    return this;
}

Select_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_clauseContext.prototype.constructor = Select_clauseContext;


 
Select_clauseContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SelAttrContext(parser, ctx) {
	Select_clauseContext.call(this, parser);
    this.attrname = null; // ExprContext;
    this.attrval = null; // ExprContext;
    Select_clauseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SelAttrContext.prototype = Object.create(Select_clauseContext.prototype);
SelAttrContext.prototype.constructor = SelAttrContext;

SqlppParser.SelAttrContext = SelAttrContext;

SelAttrContext.prototype.K_SELECT = function() {
    return this.getToken(SqlppParser.K_SELECT, 0);
};

SelAttrContext.prototype.K_ATTRIBUTE = function() {
    return this.getToken(SqlppParser.K_ATTRIBUTE, 0);
};

SelAttrContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
SelAttrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitSelAttr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SQLSelContext(parser, ctx) {
	Select_clauseContext.call(this, parser);
    Select_clauseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SQLSelContext.prototype = Object.create(Select_clauseContext.prototype);
SQLSelContext.prototype.constructor = SQLSelContext;

SqlppParser.SQLSelContext = SQLSelContext;

SQLSelContext.prototype.K_SELECT = function() {
    return this.getToken(SqlppParser.K_SELECT, 0);
};

SQLSelContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

SQLSelContext.prototype.K_AS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlppParser.K_AS);
    } else {
        return this.getToken(SqlppParser.K_AS, i);
    }
};


SQLSelContext.prototype.attr_name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Attr_nameContext);
    } else {
        return this.getTypedRuleContext(Attr_nameContext,i);
    }
};
SQLSelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitSQLSel(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SelElementContext(parser, ctx) {
	Select_clauseContext.call(this, parser);
    Select_clauseContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SelElementContext.prototype = Object.create(Select_clauseContext.prototype);
SelElementContext.prototype.constructor = SelElementContext;

SqlppParser.SelElementContext = SelElementContext;

SelElementContext.prototype.K_SELECT = function() {
    return this.getToken(SqlppParser.K_SELECT, 0);
};

SelElementContext.prototype.K_ELEMENT = function() {
    return this.getToken(SqlppParser.K_ELEMENT, 0);
};

SelElementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
SelElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitSelElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SqlppParser.Select_clauseContext = Select_clauseContext;

SqlppParser.prototype.select_clause = function() {

    var localctx = new Select_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SqlppParser.RULE_select_clause);
    var _la = 0; // Token type
    try {
        this.state = 59;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SelElementContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 33;
            this.match(SqlppParser.K_SELECT);
            this.state = 34;
            this.match(SqlppParser.K_ELEMENT);
            this.state = 35;
            this.expr(0);
            break;

        case 2:
            localctx = new SelAttrContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.match(SqlppParser.K_SELECT);
            this.state = 37;
            this.match(SqlppParser.K_ATTRIBUTE);
            this.state = 38;
            localctx.attrname = this.expr(0);
            this.state = 39;
            this.match(SqlppParser.T__0);
            this.state = 40;
            localctx.attrval = this.expr(0);
            break;

        case 3:
            localctx = new SQLSelContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 42;
            this.match(SqlppParser.K_SELECT);
            this.state = 43;
            this.expr(0);
            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlppParser.K_AS) {
                this.state = 44;
                this.match(SqlppParser.K_AS);
                this.state = 45;
                this.attr_name();
            }

            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SqlppParser.T__1) {
                this.state = 48;
                this.match(SqlppParser.T__1);
                this.state = 49;
                this.expr(0);
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SqlppParser.K_AS) {
                    this.state = 50;
                    this.match(SqlppParser.K_AS);
                    this.state = 51;
                    this.attr_name();
                }

                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function From_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_from_clause;
    return this;
}

From_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
From_clauseContext.prototype.constructor = From_clauseContext;

From_clauseContext.prototype.K_FROM = function() {
    return this.getToken(SqlppParser.K_FROM, 0);
};

From_clauseContext.prototype.from_item = function() {
    return this.getTypedRuleContext(From_itemContext,0);
};

From_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFrom_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.From_clauseContext = From_clauseContext;

SqlppParser.prototype.from_clause = function() {

    var localctx = new From_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SqlppParser.RULE_from_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(SqlppParser.K_FROM);
        this.state = 62;
        this.from_item(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function From_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_from_item;
    return this;
}

From_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
From_itemContext.prototype.constructor = From_itemContext;


 
From_itemContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function FromILCorrContext(parser, ctx) {
	From_itemContext.call(this, parser);
    this.lhs = null; // From_itemContext;
    this.op = null; // Token;
    this.rhs = null; // From_itemContext;
    From_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FromILCorrContext.prototype = Object.create(From_itemContext.prototype);
FromILCorrContext.prototype.constructor = FromILCorrContext;

SqlppParser.FromILCorrContext = FromILCorrContext;

FromILCorrContext.prototype.from_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(From_itemContext);
    } else {
        return this.getTypedRuleContext(From_itemContext,i);
    }
};

FromILCorrContext.prototype.K_INNER = function() {
    return this.getToken(SqlppParser.K_INNER, 0);
};

FromILCorrContext.prototype.K_LEFT = function() {
    return this.getToken(SqlppParser.K_LEFT, 0);
};

FromILCorrContext.prototype.K_CORRELATE = function() {
    return this.getToken(SqlppParser.K_CORRELATE, 0);
};

FromILCorrContext.prototype.K_OUTER = function() {
    return this.getToken(SqlppParser.K_OUTER, 0);
};
FromILCorrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFromILCorr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FromJoinContext(parser, ctx) {
	From_itemContext.call(this, parser);
    this.lhs = null; // From_itemContext;
    this.op = null; // Token;
    this.rhs = null; // From_itemContext;
    From_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FromJoinContext.prototype = Object.create(From_itemContext.prototype);
FromJoinContext.prototype.constructor = FromJoinContext;

SqlppParser.FromJoinContext = FromJoinContext;

FromJoinContext.prototype.K_JOIN = function() {
    return this.getToken(SqlppParser.K_JOIN, 0);
};

FromJoinContext.prototype.K_ON = function() {
    return this.getToken(SqlppParser.K_ON, 0);
};

FromJoinContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FromJoinContext.prototype.from_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(From_itemContext);
    } else {
        return this.getTypedRuleContext(From_itemContext,i);
    }
};

FromJoinContext.prototype.K_INNER = function() {
    return this.getToken(SqlppParser.K_INNER, 0);
};

FromJoinContext.prototype.K_LEFT = function() {
    return this.getToken(SqlppParser.K_LEFT, 0);
};

FromJoinContext.prototype.K_RIGHT = function() {
    return this.getToken(SqlppParser.K_RIGHT, 0);
};

FromJoinContext.prototype.K_FULL = function() {
    return this.getToken(SqlppParser.K_FULL, 0);
};
FromJoinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFromJoin(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FromRangeContext(parser, ctx) {
	From_itemContext.call(this, parser);
    this.asvar = null; // VariableContext;
    this.atvar = null; // VariableContext;
    From_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FromRangeContext.prototype = Object.create(From_itemContext.prototype);
FromRangeContext.prototype.constructor = FromRangeContext;

SqlppParser.FromRangeContext = FromRangeContext;

FromRangeContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FromRangeContext.prototype.K_AS = function() {
    return this.getToken(SqlppParser.K_AS, 0);
};

FromRangeContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

FromRangeContext.prototype.K_AT = function() {
    return this.getToken(SqlppParser.K_AT, 0);
};
FromRangeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFromRange(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FromRangePairContext(parser, ctx) {
	From_itemContext.call(this, parser);
    this.attrname = null; // VariableContext;
    this.attrval = null; // VariableContext;
    From_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FromRangePairContext.prototype = Object.create(From_itemContext.prototype);
FromRangePairContext.prototype.constructor = FromRangePairContext;

SqlppParser.FromRangePairContext = FromRangePairContext;

FromRangePairContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FromRangePairContext.prototype.K_AS = function() {
    return this.getToken(SqlppParser.K_AS, 0);
};

FromRangePairContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};
FromRangePairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFromRangePair(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FromFlattenContext(parser, ctx) {
	From_itemContext.call(this, parser);
    this.lexpr = null; // ExprContext;
    this.lvar = null; // VariableContext;
    this.rexpr = null; // ExprContext;
    this.rvar = null; // VariableContext;
    From_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FromFlattenContext.prototype = Object.create(From_itemContext.prototype);
FromFlattenContext.prototype.constructor = FromFlattenContext;

SqlppParser.FromFlattenContext = FromFlattenContext;

FromFlattenContext.prototype.K_FLATTEN = function() {
    return this.getToken(SqlppParser.K_FLATTEN, 0);
};

FromFlattenContext.prototype.K_AS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlppParser.K_AS);
    } else {
        return this.getToken(SqlppParser.K_AS, i);
    }
};


FromFlattenContext.prototype.K_INNER = function() {
    return this.getToken(SqlppParser.K_INNER, 0);
};

FromFlattenContext.prototype.K_OUTER = function() {
    return this.getToken(SqlppParser.K_OUTER, 0);
};

FromFlattenContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

FromFlattenContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};
FromFlattenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFromFlatten(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FromFullContext(parser, ctx) {
	From_itemContext.call(this, parser);
    this.lhs = null; // From_itemContext;
    this.op = null; // Token;
    this.rhs = null; // From_itemContext;
    From_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FromFullContext.prototype = Object.create(From_itemContext.prototype);
FromFullContext.prototype.constructor = FromFullContext;

SqlppParser.FromFullContext = FromFullContext;

FromFullContext.prototype.K_ON = function() {
    return this.getToken(SqlppParser.K_ON, 0);
};

FromFullContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FromFullContext.prototype.from_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(From_itemContext);
    } else {
        return this.getTypedRuleContext(From_itemContext,i);
    }
};

FromFullContext.prototype.K_FULL = function() {
    return this.getToken(SqlppParser.K_FULL, 0);
};

FromFullContext.prototype.K_OUTER = function() {
    return this.getToken(SqlppParser.K_OUTER, 0);
};

FromFullContext.prototype.K_CORRELATE = function() {
    return this.getToken(SqlppParser.K_CORRELATE, 0);
};
FromFullContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFromFull(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FromCommaContext(parser, ctx) {
	From_itemContext.call(this, parser);
    this.lhs = null; // From_itemContext;
    this.op = null; // Token;
    this.rhs = null; // From_itemContext;
    From_itemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FromCommaContext.prototype = Object.create(From_itemContext.prototype);
FromCommaContext.prototype.constructor = FromCommaContext;

SqlppParser.FromCommaContext = FromCommaContext;

FromCommaContext.prototype.from_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(From_itemContext);
    } else {
        return this.getTypedRuleContext(From_itemContext,i);
    }
};
FromCommaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFromComma(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SqlppParser.prototype.from_item = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new From_itemContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, SqlppParser.RULE_from_item, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FromRangeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 65;
            this.expr(0);
            this.state = 66;
            this.match(SqlppParser.K_AS);
            this.state = 67;
            localctx.asvar = this.variable();
            this.state = 70;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 68;
                this.match(SqlppParser.K_AT);
                this.state = 69;
                localctx.atvar = this.variable();

            }
            break;

        case 2:
            localctx = new FromRangePairContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 72;
            this.expr(0);
            this.state = 73;
            this.match(SqlppParser.K_AS);
            this.state = 74;
            this.match(SqlppParser.T__2);
            this.state = 75;
            localctx.attrname = this.variable();
            this.state = 76;
            this.match(SqlppParser.T__0);
            this.state = 77;
            localctx.attrval = this.variable();
            this.state = 78;
            this.match(SqlppParser.T__3);
            break;

        case 3:
            localctx = new FromFlattenContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 80;
            _la = this._input.LA(1);
            if(!(_la===SqlppParser.K_INNER || _la===SqlppParser.K_OUTER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 81;
            this.match(SqlppParser.K_FLATTEN);
            this.state = 82;
            this.match(SqlppParser.T__4);
            this.state = 83;
            localctx.lexpr = this.expr(0);
            this.state = 84;
            this.match(SqlppParser.K_AS);
            this.state = 85;
            localctx.lvar = this.variable();
            this.state = 86;
            this.match(SqlppParser.T__1);
            this.state = 87;
            localctx.rexpr = this.expr(0);
            this.state = 88;
            this.match(SqlppParser.K_AS);
            this.state = 89;
            localctx.rvar = this.variable();
            this.state = 90;
            this.match(SqlppParser.T__5);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 130;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 128;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new FromILCorrContext(this, new From_itemContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_from_item);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 100;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case SqlppParser.K_INNER:
                        this.state = 95;
                        localctx.op = this.match(SqlppParser.K_INNER);
                        break;
                    case SqlppParser.K_LEFT:
                        this.state = 96;
                        localctx.op = this.match(SqlppParser.K_LEFT);
                        this.state = 98;
                        this._errHandler.sync(this);
                        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
                        if(la_===1) {
                            this.state = 97;
                            this.match(SqlppParser.K_OUTER);

                        }
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 103;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===SqlppParser.K_CORRELATE) {
                        this.state = 102;
                        this.match(SqlppParser.K_CORRELATE);
                    }

                    this.state = 105;
                    localctx.rhs = this.from_item(6);
                    break;

                case 2:
                    localctx = new FromCommaContext(this, new From_itemContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_from_item);
                    this.state = 106;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 107;
                    localctx.op = this.match(SqlppParser.T__1);
                    this.state = 108;
                    localctx.rhs = this.from_item(4);
                    break;

                case 3:
                    localctx = new FromFullContext(this, new From_itemContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_from_item);
                    this.state = 109;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 110;
                    localctx.op = this.match(SqlppParser.K_FULL);
                    this.state = 112;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
                    if(la_===1) {
                        this.state = 111;
                        this.match(SqlppParser.K_OUTER);

                    }
                    this.state = 115;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===SqlppParser.K_CORRELATE) {
                        this.state = 114;
                        this.match(SqlppParser.K_CORRELATE);
                    }

                    this.state = 117;
                    localctx.rhs = this.from_item(0);
                    this.state = 118;
                    this.match(SqlppParser.K_ON);
                    this.state = 119;
                    this.expr(0);
                    break;

                case 4:
                    localctx = new FromJoinContext(this, new From_itemContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_from_item);
                    this.state = 121;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 122;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (SqlppParser.K_INNER - 33)) | (1 << (SqlppParser.K_LEFT - 33)) | (1 << (SqlppParser.K_RIGHT - 33)) | (1 << (SqlppParser.K_FULL - 33)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 123;
                    this.match(SqlppParser.K_JOIN);
                    this.state = 124;
                    localctx.rhs = this.from_item(0);
                    this.state = 125;
                    this.match(SqlppParser.K_ON);
                    this.state = 126;
                    this.expr(0);
                    break;

                } 
            }
            this.state = 132;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Where_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_where_clause;
    return this;
}

Where_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Where_clauseContext.prototype.constructor = Where_clauseContext;

Where_clauseContext.prototype.K_WHERE = function() {
    return this.getToken(SqlppParser.K_WHERE, 0);
};

Where_clauseContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Where_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitWhere_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.Where_clauseContext = Where_clauseContext;

SqlppParser.prototype.where_clause = function() {

    var localctx = new Where_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SqlppParser.RULE_where_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(SqlppParser.K_WHERE);
        this.state = 134;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ExprObjContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprObjContext.prototype = Object.create(ExprContext.prototype);
ExprObjContext.prototype.constructor = ExprObjContext;

SqlppParser.ExprObjContext = ExprObjContext;

ExprObjContext.prototype.attr_name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Attr_nameContext);
    } else {
        return this.getTypedRuleContext(Attr_nameContext,i);
    }
};

ExprObjContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ExprObjContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprObj(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprBagContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprBagContext.prototype = Object.create(ExprContext.prototype);
ExprBagContext.prototype.constructor = ExprBagContext;

SqlppParser.ExprBagContext = ExprBagContext;

ExprBagContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ExprBagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprBag(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprBinaryContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.lhs = null; // ExprContext;
    this.op = null; // Token;
    this.rhs = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprBinaryContext.prototype = Object.create(ExprContext.prototype);
ExprBinaryContext.prototype.constructor = ExprBinaryContext;

SqlppParser.ExprBinaryContext = ExprBinaryContext;

ExprBinaryContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprBinaryContext.prototype.K_AND = function() {
    return this.getToken(SqlppParser.K_AND, 0);
};

ExprBinaryContext.prototype.K_OR = function() {
    return this.getToken(SqlppParser.K_OR, 0);
};
ExprBinaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprBinary(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprNestSWFContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprNestSWFContext.prototype = Object.create(ExprContext.prototype);
ExprNestSWFContext.prototype.constructor = ExprNestSWFContext;

SqlppParser.ExprNestSWFContext = ExprNestSWFContext;

ExprNestSWFContext.prototype.swf_query = function() {
    return this.getTypedRuleContext(Swf_queryContext,0);
};
ExprNestSWFContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprNestSWF(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprUnaryContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprUnaryContext.prototype = Object.create(ExprContext.prototype);
ExprUnaryContext.prototype.constructor = ExprUnaryContext;

SqlppParser.ExprUnaryContext = ExprUnaryContext;

ExprUnaryContext.prototype.unary_op = function() {
    return this.getTypedRuleContext(Unary_opContext,0);
};

ExprUnaryContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ExprUnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprFuncContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprFuncContext.prototype = Object.create(ExprContext.prototype);
ExprFuncContext.prototype.constructor = ExprFuncContext;

SqlppParser.ExprFuncContext = ExprFuncContext;

ExprFuncContext.prototype.func_name = function() {
    return this.getTypedRuleContext(Func_nameContext,0);
};

ExprFuncContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ExprFuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprArrAcsContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprArrAcsContext.prototype = Object.create(ExprContext.prototype);
ExprArrAcsContext.prototype.constructor = ExprArrAcsContext;

SqlppParser.ExprArrAcsContext = ExprArrAcsContext;

ExprArrAcsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ExprArrAcsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprArrAcs(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprVariContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprVariContext.prototype = Object.create(ExprContext.prototype);
ExprVariContext.prototype.constructor = ExprVariContext;

SqlppParser.ExprVariContext = ExprVariContext;

ExprVariContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
ExprVariContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprVari(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprPathContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprPathContext.prototype = Object.create(ExprContext.prototype);
ExprPathContext.prototype.constructor = ExprPathContext;

SqlppParser.ExprPathContext = ExprPathContext;

ExprPathContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprPathContext.prototype.attr_name = function() {
    return this.getTypedRuleContext(Attr_nameContext,0);
};
ExprPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprValContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprValContext.prototype = Object.create(ExprContext.prototype);
ExprValContext.prototype.constructor = ExprValContext;

SqlppParser.ExprValContext = ExprValContext;

ExprValContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};
ExprValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprArrContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprArrContext.prototype = Object.create(ExprContext.prototype);
ExprArrContext.prototype.constructor = ExprArrContext;

SqlppParser.ExprArrContext = ExprArrContext;

ExprArrContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ExprArrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprArr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExprParanContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprParanContext.prototype = Object.create(ExprContext.prototype);
ExprParanContext.prototype.constructor = ExprParanContext;

SqlppParser.ExprParanContext = ExprParanContext;

ExprParanContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ExprParanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitExprParan(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SqlppParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, SqlppParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ExprNestSWFContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 137;
            this.match(SqlppParser.T__4);
            this.state = 138;
            this.swf_query();
            this.state = 139;
            this.match(SqlppParser.T__5);
            break;

        case 2:
            localctx = new ExprValContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 141;
            this.value();
            break;

        case 3:
            localctx = new ExprVariContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 142;
            this.variable();
            break;

        case 4:
            localctx = new ExprUnaryContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 143;
            this.unary_op();
            this.state = 144;
            this.expr(13);
            break;

        case 5:
            localctx = new ExprFuncContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 146;
            this.func_name();
            this.state = 147;
            this.match(SqlppParser.T__4);
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlppParser.T__2) | (1 << SqlppParser.T__4) | (1 << SqlppParser.T__7) | (1 << SqlppParser.T__13) | (1 << SqlppParser.T__14) | (1 << SqlppParser.T__23) | (1 << SqlppParser.T__25))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (SqlppParser.K_NOT - 43)) | (1 << (SqlppParser.STRLITERAL - 43)) | (1 << (SqlppParser.NUMBER - 43)) | (1 << (SqlppParser.VAR_NAME - 43)))) !== 0)) {
                this.state = 148;
                this.expr(0);
            }

            this.state = 155;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SqlppParser.T__1) {
                this.state = 151;
                this.match(SqlppParser.T__1);
                this.state = 152;
                this.expr(0);
                this.state = 157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 158;
            this.match(SqlppParser.T__5);
            break;

        case 6:
            localctx = new ExprObjContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 160;
            this.match(SqlppParser.T__2);
            this.state = 165;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SqlppParser.VAR_NAME) {
                this.state = 161;
                this.attr_name();
                this.state = 162;
                this.match(SqlppParser.T__0);
                this.state = 163;
                this.expr(0);
            }

            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SqlppParser.T__1) {
                this.state = 167;
                this.match(SqlppParser.T__1);
                this.state = 168;
                this.attr_name();
                this.state = 169;
                this.match(SqlppParser.T__0);
                this.state = 170;
                this.expr(0);
                this.state = 176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 177;
            this.match(SqlppParser.T__3);
            break;

        case 7:
            localctx = new ExprArrContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 178;
            this.match(SqlppParser.T__7);
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlppParser.T__2) | (1 << SqlppParser.T__4) | (1 << SqlppParser.T__7) | (1 << SqlppParser.T__13) | (1 << SqlppParser.T__14) | (1 << SqlppParser.T__23) | (1 << SqlppParser.T__25))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (SqlppParser.K_NOT - 43)) | (1 << (SqlppParser.STRLITERAL - 43)) | (1 << (SqlppParser.NUMBER - 43)) | (1 << (SqlppParser.VAR_NAME - 43)))) !== 0)) {
                this.state = 179;
                this.expr(0);
            }

            this.state = 186;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SqlppParser.T__1) {
                this.state = 182;
                this.match(SqlppParser.T__1);
                this.state = 183;
                this.expr(0);
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 189;
            this.match(SqlppParser.T__8);
            break;

        case 8:
            localctx = new ExprBagContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 190;
            this.match(SqlppParser.T__23);
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlppParser.T__2) | (1 << SqlppParser.T__4) | (1 << SqlppParser.T__7) | (1 << SqlppParser.T__13) | (1 << SqlppParser.T__14) | (1 << SqlppParser.T__23) | (1 << SqlppParser.T__25))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (SqlppParser.K_NOT - 43)) | (1 << (SqlppParser.STRLITERAL - 43)) | (1 << (SqlppParser.NUMBER - 43)) | (1 << (SqlppParser.VAR_NAME - 43)))) !== 0)) {
                this.state = 191;
                this.expr(0);
            }

            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SqlppParser.T__1) {
                this.state = 194;
                this.match(SqlppParser.T__1);
                this.state = 195;
                this.expr(0);
                this.state = 200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 201;
            this.match(SqlppParser.T__24);
            break;

        case 9:
            localctx = new ExprParanContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 202;
            this.match(SqlppParser.T__4);
            this.state = 203;
            this.expr(0);
            this.state = 204;
            this.match(SqlppParser.T__5);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 239;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 237;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprBinaryContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 208;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 209;
                    localctx.op = this.match(SqlppParser.T__9);
                    this.state = 210;
                    localctx.rhs = this.expr(13);
                    break;

                case 2:
                    localctx = new ExprBinaryContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 211;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 212;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlppParser.T__10) | (1 << SqlppParser.T__11) | (1 << SqlppParser.T__12))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 213;
                    localctx.rhs = this.expr(12);
                    break;

                case 3:
                    localctx = new ExprBinaryContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 214;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 215;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===SqlppParser.T__13 || _la===SqlppParser.T__14)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 216;
                    localctx.rhs = this.expr(11);
                    break;

                case 4:
                    localctx = new ExprBinaryContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 217;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 218;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlppParser.T__15) | (1 << SqlppParser.T__16) | (1 << SqlppParser.T__17) | (1 << SqlppParser.T__18))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 219;
                    localctx.rhs = this.expr(10);
                    break;

                case 5:
                    localctx = new ExprBinaryContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 220;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 221;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlppParser.T__19) | (1 << SqlppParser.T__20) | (1 << SqlppParser.T__21) | (1 << SqlppParser.T__22))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 222;
                    localctx.rhs = this.expr(9);
                    break;

                case 6:
                    localctx = new ExprBinaryContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 223;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 224;
                    localctx.op = this.match(SqlppParser.K_AND);
                    this.state = 225;
                    localctx.rhs = this.expr(8);
                    break;

                case 7:
                    localctx = new ExprBinaryContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 227;
                    localctx.op = this.match(SqlppParser.K_OR);
                    this.state = 228;
                    localctx.rhs = this.expr(7);
                    break;

                case 8:
                    localctx = new ExprPathContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 229;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 230;
                    this.match(SqlppParser.T__6);
                    this.state = 231;
                    this.attr_name();
                    break;

                case 9:
                    localctx = new ExprArrAcsContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SqlppParser.RULE_expr);
                    this.state = 232;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 233;
                    this.match(SqlppParser.T__7);
                    this.state = 234;
                    this.expr(0);
                    this.state = 235;
                    this.match(SqlppParser.T__8);
                    break;

                } 
            }
            this.state = 241;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Unary_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_unary_op;
    return this;
}

Unary_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_opContext.prototype.constructor = Unary_opContext;

Unary_opContext.prototype.K_NOT = function() {
    return this.getToken(SqlppParser.K_NOT, 0);
};

Unary_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitUnary_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.Unary_opContext = Unary_opContext;

SqlppParser.prototype.unary_op = function() {

    var localctx = new Unary_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SqlppParser.RULE_unary_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        _la = this._input.LA(1);
        if(!(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (SqlppParser.T__13 - 14)) | (1 << (SqlppParser.T__14 - 14)) | (1 << (SqlppParser.T__25 - 14)) | (1 << (SqlppParser.K_NOT - 14)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRLITERAL = function() {
    return this.getToken(SqlppParser.STRLITERAL, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(SqlppParser.NUMBER, 0);
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.ValueContext = ValueContext;

SqlppParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SqlppParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        _la = this._input.LA(1);
        if(!(_la===SqlppParser.STRLITERAL || _la===SqlppParser.NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VAR_NAME = function() {
    return this.getToken(SqlppParser.VAR_NAME, 0);
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.VariableContext = VariableContext;

SqlppParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SqlppParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(SqlppParser.VAR_NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Func_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_func_name;
    return this;
}

Func_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_nameContext.prototype.constructor = Func_nameContext;

Func_nameContext.prototype.VAR_NAME = function() {
    return this.getToken(SqlppParser.VAR_NAME, 0);
};

Func_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitFunc_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.Func_nameContext = Func_nameContext;

SqlppParser.prototype.func_name = function() {

    var localctx = new Func_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SqlppParser.RULE_func_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.match(SqlppParser.VAR_NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attr_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlppParser.RULE_attr_name;
    return this;
}

Attr_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attr_nameContext.prototype.constructor = Attr_nameContext;

Attr_nameContext.prototype.VAR_NAME = function() {
    return this.getToken(SqlppParser.VAR_NAME, 0);
};

Attr_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlppVisitor ) {
        return visitor.visitAttr_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlppParser.Attr_nameContext = Attr_nameContext;

SqlppParser.prototype.attr_name = function() {

    var localctx = new Attr_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SqlppParser.RULE_attr_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.match(SqlppParser.VAR_NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SqlppParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 4:
			return this.from_item_sempred(localctx, predIndex);
	case 6:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SqlppParser.prototype.from_item_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 4);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

SqlppParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 12);
		case 5:
			return this.precpred(this._ctx, 11);
		case 6:
			return this.precpred(this._ctx, 10);
		case 7:
			return this.precpred(this._ctx, 9);
		case 8:
			return this.precpred(this._ctx, 8);
		case 9:
			return this.precpred(this._ctx, 7);
		case 10:
			return this.precpred(this._ctx, 6);
		case 11:
			return this.precpred(this._ctx, 15);
		case 12:
			return this.precpred(this._ctx, 14);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SqlppParser = SqlppParser;